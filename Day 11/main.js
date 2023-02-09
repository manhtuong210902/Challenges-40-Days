const icon = document.querySelector('.icon')
const search = document.querySelector('.search')
const input = document.querySelector('.input input')
const clearBtn = document.querySelector('.clear')

icon.onclick = function(){
    search.classList.toggle('active')
    // clearBtn.classList.toggle('show')
}

clearBtn.onclick = function(){
    input.value = ''
}