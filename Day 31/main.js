const animationEle = document.querySelectorAll('.reveal')

function checkOnScroll(element){
    var top = element.getClientRects()[0].top
    var bottom = element.getClientRects()[0].bottom
    
    var heightScreen = window.innerHeight
    if(top < heightScreen && bottom > 0){
        element.classList.add('active')
    }else{
        element.classList.remove('active')
    }
}

function showOnScroll(){
    animationEle.forEach((ele)=>{
        checkOnScroll(ele)
    })
}

window.onscroll = showOnScroll