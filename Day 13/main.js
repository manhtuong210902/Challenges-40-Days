const eventKey = document.querySelector('.card.key .card-main')
const eventLocation = document.querySelector('.card.location .card-main')
const eventWhich = document.querySelector('.card.which .card-main')
const eventCode = document.querySelector('.card.code .card-main')
const alertElement = document.querySelector('.alert')
const boxElement = document.querySelector('.box')
const result = document.querySelector('.result')


document.addEventListener('keydown', event => {
    alertElement.classList.add('hide')
    boxElement.classList.remove('hide')

    event.key == ' '?eventKey.innerText = 'Space':eventKey.innerText = event.key
    eventLocation.innerText = event.location
    eventWhich.innerText = event.which
    eventCode.innerText = event.code
    result.innerText = event.which
})