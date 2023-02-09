function Validator(options){
    var selectorRules = {}

    //hàm xác nhận form
    function validate(inputElement, rule){
        var formMessageEle = inputElement.parentElement.querySelector('.form-message')
        var formGroupEle = inputElement.parentElement

        //lấy ra các rules của selector
        var rules = selectorRules[rule.selector]
         //lấy được value: inputElement.value
        var value = inputElement.value
         //test func: rule.test
        var errorMsg
        //chạy từng rules của selector
        for(var i = 0; i < rules.length; i++){
            errorMsg = rules[i](value)
            if(errorMsg) break
        }

        if(errorMsg){
             formMessageEle.innerText = errorMsg
             formGroupEle.classList.add('invalid')
        }else{
             formMessageEle.innerText = ""
             formGroupEle.classList.remove('invalid')
        }

        return !errorMsg
    }

    //lấy formElement từ options
    var formElement = document.querySelector(options.form)
    if(formElement){
        //xử kiện khi submit form
        formElement.onsubmit = function(e){
            e.preventDefault()

            var isFormValid = true;
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if(!isValid){
                    isFormValid = false
                }
            })

            if(isFormValid){
                if(typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]:not([disable])')
                    var formValues = Array.from(enableInputs).reduce(function(values, inputElement){
                        values[inputElement.name] = inputElement.value
                        return values
                    }, {})
                    options.onSubmit(formValues)
                }
            }else{
                console.log("Có lỗi")
            }
        }

        options.rules.forEach(function (rule){
            var inputElement = formElement.querySelector(rule.selector)
            if(inputElement){
                //Lưu lại các rules cho mỗi input
                if(Array.isArray(selectorRules[rule.selector])){
                    selectorRules[rule.selector].push(rule.test)
                }else{
                    selectorRules[rule.selector] = [rule.test]
                }

                //Xử lý trường blur khỏi input
                inputElement.onblur = function(){
                   validate(inputElement, rule)
                }
                //Xử lý trường hợp mỗi khi người dùng nhập vào input
                inputElement.oninput = function(){
                    var formMessageEle = inputElement.parentElement.querySelector('.form-message')
                    var formGroupEle = inputElement.parentElement
                    formMessageEle.innerText = ""
                    formGroupEle.classList.remove('invalid')
                }
            }
        })
    }
}

//Định nghĩa rules
//Nguyên tắc khi có lỗi thì trả ra msg lỗi, ko lỗi không trả ra gì vả (undefined)
Validator.isRequired = function(selector){
    return {
        selector: selector,
        test: function(value){
            if(value.trim()){
                return undefined
            }else return 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(regex.test(value)){
                return undefined
            }else return 'Trường này phải là email'
        }
    }
}

Validator.minLength = function(selector, min){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min?undefined:`Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}

Validator.isConfirm = function(selector, selectorPassword){
    return{
        selector: selector,
        test: function(value){
            var passwordEle = document.querySelector(selectorPassword)
            var password = passwordEle.value
            if(value == ""){
                return "Vui lòng nhập trường này"
            }else if(password == ""){
                return "Vui lòng nhập mật khẩu trước"
            }else if(value != password){
                return "Mật khẩu nhập lại chưa chính xác"
            }else return undefined
        }
    }
}