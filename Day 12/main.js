const content = document.querySelector('.content')
const input = document.querySelector('.content input')
const btnRemoveAll = document.querySelector('.remove-all')


var tags = ['NodeJs', 'ReactJs']
var tagElements = []

function render(){
    content.innerHTML = ''
    tags.forEach((tag,index) => {
        content.innerHTML += `
            <span>
                ${tag}
                <i class="fa-solid fa-xmark" onclick="removeTag(${index})"></i>
            </span>            
        `
    })

    content.appendChild(input)
    input.focus()
}

render()

input.addEventListener('keydown', event => {
    var value = event.target.value
    if(value.trim()){
        if(event.keyCode == 13){
            tags.push(event.target.value.trim())
            event.target.value = ''
        }
    }
    render()
})


function removeTag(index){
    tags.splice(index, 1)
    render()
}

btnRemoveAll.onclick = function(){
    tags = []
    render()
}