const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cardELe = $('.card')
const profileEle = $('.profile')
const cardBtn = $('.card__btn')
const profileBtn = $('.profile button')

const app = {
    handleEvents: function(){
        cardBtn.onclick = function(){
            cardELe.style.display = 'none'
            profileEle.style.display = 'block'
        }

        profileBtn.onclick = function(){
            cardELe.style.display = 'block'
            profileEle.style.display = 'none'
        }
    },

    start: function(){
        this.handleEvents()
    }
}

app.start()