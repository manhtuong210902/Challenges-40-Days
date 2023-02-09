const taskInput = document.querySelector('.add-task input')
const addTaskEle = document.querySelector('.add-task')
const taskBoxEle = document.querySelector('.task-box')
const filters = document.querySelectorAll('.filters span')
const btnClearAll = document.querySelector('.clear-btn')

app = {
    //data task list
    data: JSON.parse(localStorage.getItem('tasks')) || [],
    isEditedTasked: false,
    indexEdited: -1,

    //save data into localStorage
    saveData: function(){
        localStorage.setItem('tasks', JSON.stringify(this.data))//save task arr in localStorage
    },
    //show task
    showTask: function(filter = 'all'){
        let textBox = ''
        this.data.forEach((task, index) => {
            textClass = task.status == 'completed' ? 'checked' : ''
            if(filter == task.status || filter == 'all'){
                textBox += `
                <li class="task">
                    <label for="${index}">
                        <input onclick = 'app.updateStatus(this, ${index})' type="checkbox" id="${index}" ${textClass}>
                        <p class="${textClass}">${task.text}</p>
                    </label>
                    <div class="setting">
                        <i class="uil uil-ellipsis-h"></i>
                        <div class="set-list">
                            <div class="set-item" id="edit" onclick = 'app.editTask(${index})'>
                                <i class="uil uil-pen"></i>
                                <p>Edit</p>
                            </div>
                            <div class="set-item" id="delete" onclick = 'app.deleteTask(${index})'>
                                <i class="uil uil-trash"></i>
                                <p>Delete</p>
                            </div>
                        </div>
                    </div>
                </li>
                `
            }
        });
        taskBoxEle.innerHTML = textBox
    },

    //update status in text box
    updateStatus:function(checkboxInput, index){
        let text = checkboxInput.parentElement.querySelector('p')
        if(checkboxInput.checked){
            this.data[index].status = 'completed'
            text.classList.add('checked')
        }else{
            this.data[index].status = 'pending'
            text.classList.remove('checked')
        }
        this.saveData()
    },

    //edit task
    editTask: function(index){
        taskInput.value = this.data[index].text
        this.isEditedTasked = true
        this.indexEdited = index
        this.saveData()
    },

    //delete task
    deleteTask: function(index){
        this.data.splice(index, 1)
        this.saveData()
        this.showTask()
    },

    //handle event in todo list
    handleEvent: function(){
        const _this = this
        //1. Focus Input
        taskInput.onfocus = function(){
            addTaskEle.classList.add('active')
        }
        //2. Blur Input
        taskInput.onblur = function(){
            addTaskEle.classList.remove('active')
        }
        //3. Check enter
        taskInput.addEventListener('keyup', e => {
            let userTask = taskInput.value.trim()
            if(e.key == 'Enter' && userTask){
                if(!_this.isEditedTasked){
                    if(!_this.data){
                        _this.data = []
                    }
                    let taskItem = {text: userTask, status: 'pending'}
                    _this.data.push(taskItem)//adding new task
                }else{
                    _this.data[_this.indexEdited].text = userTask
                    _this.isEditedTasked = false
                }
                taskInput.value = ''
                _this.saveData()
                _this.showTask()
            }
        })
        //4.filter
        filters.forEach((item) => {
            console.log(item)
            item.addEventListener('click', () => {
                const filterActive = document.querySelector('.filters span.active')
                filterActive.classList.remove('active')
                item.classList.add('active')
                this.showTask(item.id)
            })
        })
        //5.clear all
        btnClearAll.onclick = function(){
            _this.data = []
            _this.saveData()
            _this.showTask()
        }
    },

    start: function(){
        this.showTask()
        this.handleEvent()
    }
}

app.start()