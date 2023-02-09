var images = document.querySelectorAll('.image img')
var prevBtn = document.querySelector('.left')
var nextBtn = document.querySelector('.right')
var closeBtn = document.querySelector('.close')
var gallery = document.querySelector('.gallery')
var galleryImg = document.querySelector('.gallery-inner img')

var currentIndex = 0

function showGallery(currentIndex){
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index) => {
    item.addEventListener('click',function(){
        currentIndex = index
        showGallery(currentIndex)
    })
})

closeBtn.onclick = function(){
    gallery.classList.remove('show')
}

//bắt sự kiện bàn phím
document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})

nextBtn.onclick = function(){
    currentIndex++
    if(currentIndex > 7){
        currentIndex = 0
    }
    showGallery(currentIndex)
}

prevBtn.onclick = function(){
    currentIndex--
    if(currentIndex < 0){
        currentIndex = 7
    }
    showGallery(currentIndex)
}