const prevBtn = document.querySelector('.prev-icon')
const nextBtn = document.querySelector('.next-icon') 
const listImg = document.querySelectorAll('.item-img')
const imgEle = document.querySelector('.img img')



var currentIndex = 0

function showSlides(currentIndex){
    imgEle.src = `./img${currentIndex+1}.jpeg`

    const itemActive = document.querySelector('.item-img.active')
    itemActive.classList.remove('active')

    listImg[currentIndex].classList.add('active')
}


listImg.forEach((item, index)=>{
    item.onclick = function(){
        imgEle.style.opacity = '0.5'
        setTimeout(() => {           
            currentIndex = index
            showSlides(currentIndex)
            imgEle.style.opacity = '1'
        }, 200);
    }
})


nextBtn.onclick = function(){
    currentIndex++
    if(currentIndex > 7){
        currentIndex = 0;
    }
    imgEle.style.animation = ''
    setTimeout(()=>{
        showSlides(currentIndex)
        imgEle.style.animation = 'slideRight 0.5s ease-in-out forwards'
    }, 200)
}

prevBtn.onclick = function(){
    currentIndex--
    if(currentIndex < 0){
        currentIndex = 7;
    }
    imgEle.style.animation = ''
    setTimeout(()=>{
        showSlides(currentIndex)
        imgEle.style.animation = 'slideLeft 0.5s ease-in-out forwards'
    }, 200)
}



