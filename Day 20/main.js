const inputEle = document.querySelector('.add-task input')
const btnAdd = document.querySelector('.btn-add')
const btnClear = document.querySelector('.btn-clear')
const listToDoEle = document.querySelector('.todo-list')


function addTask(todo){   
    const todoItem = document.createElement('li') 
    todoItem.classList.add('todo-item')

    todoItem.innerHTML = `
        <span class="todo-task">${todo.text}</span>
        <span class="btn-remove"><i class="fa-solid fa-trash"></i></span>
    `

    if(todo.status === 'completed'){
        todoItem.classList.add('completed')
    }

    //remove task
    todoItem.onclick = function(e){
        todoItem.classList.toggle('completed')
        todo['status'] = todo.status == 'completed'? '':'completed'
        todoItem['status'] = todo.status
        if(e.target.closest('.btn-remove')){
            todoItem.remove(todoItem)
        }
        saveTodoList()
    }

    listToDoEle.appendChild(todoItem)
}

inputEle.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        if(e.target.value.trim()){
            addTask({
                text: e.target.value.trim(),
                status: ''
            })
            saveTodoList()
            e.target.value = ''
        }
    }
})


btnAdd.onclick = function(){
    if(inputEle.value.trim()){
        addTask({
            text: inputEle.value.trim(),
            status: ''
        })
        saveTodoList()
        inputEle.value = ''
    }
}

btnClear.onclick = function(){
    listToDoEle.innerHTML = ''
    saveTodoList()
}

function saveTodoList(){
    const tasks = document.querySelectorAll('.todo-item')
    const description = document.querySelector('.description span')
    description.innerText = `You have ${tasks.length} pending task`

    let todoStorage = []

    tasks.forEach(task => {
        let text = task.querySelector('span').innerText
        let status = task.status
        todoStorage.push({text, status})
    })

    //save data into localStorage 
    localStorage.setItem('tasks',JSON.stringify(todoStorage))

}

function init(){
    //get data from localStorage
    let data = JSON.parse(localStorage.getItem('tasks'))
    data.forEach(task => {
        addTask(task)
    })
    saveTodoList()
}

init()