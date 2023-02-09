const slideValue = document.querySelector('.slider-value span')
const inputSlider = document.querySelector('.field input')
const inputScroll = document.querySelector('.field input::-webkit-slider-thumb')


inputSlider.oninput = function(e){
    let value = e.target.value
    slideValue.innerText = value
    slideValue.style.left = (value/2) + '%'
    slideValue.style.transform = `translateX(calc(-50% + ${10 - value/10}px))`
    slideValue.classList.add('show')
}

inputSlider.onblur = function(e){
    slideValue.classList.remove('show')
}