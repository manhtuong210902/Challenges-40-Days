const starsEle = document.querySelectorAll('.rating i')
const emojisEle = document.querySelectorAll('.emoji i')
const color = ['red','orange','lightblue','lightgreen','green']


starsEle.forEach((starEle, index) => {
    starEle.onclick = function(){
        updateRating(index)
    }
})

function updateRating(index){
    starsEle.forEach((starsEle, i) => {
        if(i <= index){
            starsEle.classList.add('active')
        }else{
            starsEle.classList.remove('active')
        }
    })

    emojisEle.forEach((emojiEle, i)=>{
        emojiEle.style.transform = `translateX(-${index*50}px)`
        emojiEle.style.color = `${color[i]}`
        emojiEle.style.filter = `drop-shadow(0 0 5px ${color[i]})`
    })
}
