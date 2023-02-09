const tabHeaders = document.querySelectorAll('.tab-header div')
const tabBody = document.querySelectorAll('.tab-body div')
const tabIndicator = document.querySelector('.tab-indicator')



tabHeaders.forEach((tabHeader, index) => {
    tabHeader.onclick = function(){
        const tabActiveHeader = document.querySelector('.tab-header div.active')
        const tabActiveBody = document.querySelector('.tab-body div.active')

        tabActiveHeader.classList.remove('active')
        tabActiveBody.classList.remove('active')

        
        tabIndicator.style.left = tabHeader.offsetLeft + 'px'
        tabHeader.classList.add('active')
        tabBody[index].classList.add('active')
    }
})