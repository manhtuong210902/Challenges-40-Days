const headerEle = document.querySelector('.header')
const wrapperEle = document.querySelector('.wrapper')

function onDrag(e){
    let getStyle = window.getComputedStyle(wrapperEle)

    let left = parseInt(getStyle.left)
    let top = parseInt(getStyle.top)

    wrapperEle.style.left = `${left + e.movementX}px`
    wrapperEle.style.top = `${top + e.movementY}px`
}

headerEle.addEventListener('mousedown',()=>{
    headerEle.style.cursor = 'move'
    headerEle.addEventListener('mousemove', onDrag)
})


document.addEventListener('mouseup',()=>{
    headerEle.style.cursor = 'auto'
    headerEle.removeEventListener('mousemove', onDrag)
})

