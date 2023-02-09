const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cardImg = $('.card__img img')
const root = $(':root')
const bodyElement = $('body')
const price = $('.card__price h4')
const cardGreen = $('.card__color .card__color--green')
const cardRed = $('.card__color .card__color--red')
const cardBlack = $('.card__color .card__color--black')

const app = {
    currentIndex: 0,
    isActiveHeart: false,
    sneakers: [
        {
            color: '#4daf54',
            image: './image1.png',
            price: '$99'
        },
        {
            color: '#802133',
            image: './image2.png',
            price: '$128'
        },
        {
            color: '#111',
            image: './image3.png',
            price: '$68'
        }
    ],
    defineProperties: function(){
        Object.defineProperty(this,'currentSneaker',{
            get: function(){
                return this.sneakers[this.currentIndex]
            }
        })
    },
    loadCurrentSneaker: function(){
        index = this.currentIndex
        root.style.setProperty('--primary-color', this.sneakers[index].color)
        price.innerText = this.sneakers[index].price
        cardImg.src = this.sneakers[index].image
        if(index == 0){
            bodyElement.style.backgroundImage = `linear-gradient(to right, ${this.sneakers[index].color}, #3d8880)`
            $('.card__title h3').style.color = this.sneakers[index].color
        }
        else if(index == 1){
            bodyElement.style.backgroundImage = `linear-gradient(to right, ${this.sneakers[index].color}, #f57f94)`
            $('.card__title h3').style.color = this.sneakers[index].color
        }
        else{
            bodyElement.style.backgroundImage = `linear-gradient(to right, #333, #b6b4b4)`
            $('.card__title h3').style.color = "#fff"
        }
    },
    handleEvents: function(){
        const _this = this
        cardGreen.onclick = function(){
            _this.currentIndex = 0
            _this.loadCurrentSneaker()
        }

        cardRed.onclick = function(){
            _this.currentIndex = 1
            _this.loadCurrentSneaker()
        }

        cardBlack.onclick = function(){
            _this.currentIndex = 2
            _this.loadCurrentSneaker()
        }
    },
    start: function(){
        this.handleEvents()
    }
}

app.start()