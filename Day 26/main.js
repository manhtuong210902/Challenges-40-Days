const menuToggle = document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')

menuToggle.onclick = function(){
    navigation.classList.toggle('open')
    menuToggle.classList.toggle('active')
}

const itemsNav = document.querySelectorAll('.item')
function activeLink(){
    const itemActiveNav = document.querySelector('.item.active')
    itemActiveNav.classList.remove('active')
    this.classList.add('active')
}

itemsNav.forEach((item)=>{
    item.addEventListener('click', activeLink)
})