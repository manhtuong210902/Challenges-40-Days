const checkBox = document.querySelector('.checkbox-btn')
const btnOn = document.querySelector('.checkbox-btn span')
const imgBulb = document.querySelector('.img-bulb')

var check = 'off'

checkBox.onclick = function(){
    btnOn.classList.toggle('active')
    if(check == 'off'){
        imgBulb.src = './bulb_on.jpg'
        check = 'on'
    }else{
        imgBulb.src = './bulb_off.jpg'
        check = 'off'
    }
}