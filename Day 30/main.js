const display = document.querySelector('input')
const button = document.querySelector('.btn')
const copyBtn = document.querySelector('.copy')
const copiedBtn = document.querySelector('.copied')
const passWordEle = document.querySelector('.password')


let chars = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ123456789~!@#$%^&*()-+{}[];’,./="
button.onclick = function(){
    passWordEle.classList.remove('active')
    window.getSelection().removeAllRanges()

    let randomPassword = ""
    for(var i = 0; i < 16; i++){
        randomPassword = randomPassword + chars.charAt(
            Math.floor(Math.random() * chars.length)
        )
    }
    display.value = randomPassword
}


copyBtn.onclick = function(){
    passWordEle.classList.add('active')
    display.select()
    if(document.execCommand('copy')){
        setTimeout(() => {
            passWordEle.classList.remove('active')
            window.getSelection().removeAllRanges()
        }, 3000);
    }
}