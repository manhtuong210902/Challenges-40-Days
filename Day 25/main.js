const btnOpenModal = document.querySelector('.modal-btn')
const modalEle = document.querySelector('.wrapper')
const btnClose = document.querySelector('.btn-close')
const copyField = document.querySelector('.copy')
const inputEle = copyField.querySelector('input')
const btnCopy = copyField.querySelector('button')

function toggleModal(){
    modalEle.classList.toggle('active')
}

btnOpenModal.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)

btnCopy.onclick = function(){
    inputEle.select()
    if(document.execCommand("copy")){
        btnCopy.innerText = "Copied"
        setTimeout(()=>{
            btnCopy.innerText = "Copy"
            window.getSelection().removeAllRanges()
        }, 3000)
    }
}

