const openModalBtn = document.querySelector('.open-modal')
const modal = document.querySelector('.modal')
const iconClose = document.querySelector('.modal-header i')
const btnClose = document.querySelector('.modal-footer button')

function toggleModal(){
    modal.classList.toggle("hide")
}

openModalBtn.addEventListener("click",toggleModal)
iconClose.addEventListener("click",toggleModal)
btnClose.addEventListener("click",toggleModal)
modal.addEventListener("click",function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})
