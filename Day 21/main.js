const contextMenu = document.querySelector('.wrapper')
const shareMenu = document.querySelector('.share-menu')


document.addEventListener('contextmenu', (e)=>{
    e.preventDefault()

    let x = e.offsetX
    let y = e.offsetY

    let winWidth = window.innerWidth
    let cmWidth = contextMenu.offsetWidth

    let winHeight = window.innerHeight
    let cmHeight = contextMenu.offsetHeight

    if(x > winWidth - cmHeight - shareMenu.offsetWidth){
        shareMenu.style.left = -195 + 'px'
    }else{
        shareMenu.style.left = ''
        shareMenu.style.right = -195 + 'px'
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth - 10: x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight - 10 : y;

    contextMenu.style.left = x + 'px'
    contextMenu.style.top = y + 'px'

    contextMenu.style.visibility = 'visible'
})


document.addEventListener('click', (e)=>{
    contextMenu.style.visibility = 'hidden'
})