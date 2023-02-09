const container = document.querySelector('.wrapper')
const content = document.querySelector('.content')

window.onmousemove = function(e){
    let x = -e.clientX/5
    let y = -e.clientY/5
    container.style.backgroundPositionX = x + 'px'
    container.style.backgroundPositionY = y + 'px'
}