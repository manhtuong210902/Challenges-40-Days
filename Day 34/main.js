let lastScrollTop = 0
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop //2 thằng này như nhau
    console.log(this.window.pageYOffset)
    console.log(this.document.documentElement.scrollTop)
    if(scrollTop > lastScrollTop){
        header.style.top = '-60px'
    }else{
        header.style.top = '0'
    }
    lastScrollTop = scrollTop
})