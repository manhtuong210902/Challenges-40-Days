const cardElements = document.querySelectorAll('.card')

let matchedCard = 0
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e){
    let clickedCard = e.target
    if(clickedCard !== cardOne && !disableDeck){
        clickedCard.classList.add('active')
        if(!cardOne){
            return cardOne = clickedCard
        }
        cardTwo = clickedCard
        disableDeck = true
        let cardOneImg = cardOne.querySelector('.view.back-view img')
        let cardTwoImg = cardTwo.querySelector('.view.back-view img')

        matchCards(cardOneImg, cardTwoImg)
    }
}

function matchCards(cardOneImg, cardTwoImg){
    if(cardOneImg.src == cardTwoImg.src){
        matchedCard++
        if(matchedCard == 8){
            setTimeout(()=>{
                return shuffleCard()
            }, 1000)
        }
        cardOne.removeEventListener('click', flipCard)
        cardTwo.removeEventListener('click', flipCard)
        cardOne = ''
        cardTwo = ''
        return disableDeck = false;
    }

    setTimeout(()=>{
        cardOne.classList.add('shake')
        cardTwo.classList.add('shake')
    }, 400)

    setTimeout(()=>{
        cardOne.classList.remove('shake', 'active')
        cardTwo.classList.remove('shake', 'active')
        cardOne = ''
        cardTwo = ''
        disableDeck = false
    }, 1200)

}

function shuffleCard(){
    matchedCard = 0;
    cardOne = cardTwo = "";
    disableDeck = false
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
    arr.sort(() => Math.random() > 0.5 ? 1 : -1)
    cardElements.forEach((card, index)=>{
        card.classList.remove('active')
        let imgTag = card.querySelector('.view.back-view img')
        imgTag.src = `img-${arr[index]}.png`
        card.addEventListener('click', flipCard)
    })
}

cardElements.forEach((card)=>{
    // card.classList.add('active')
    card.addEventListener('click', flipCard)
})