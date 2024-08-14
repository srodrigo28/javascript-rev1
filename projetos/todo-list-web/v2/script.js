const btn = document.querySelector('#addButton');

function editTask(){ alert('Editando ...') }

function deleteTask(event, deleteButton){ 
    console.log('event')
    console.log(event)
    console.log('\n deleteButton')
    console.log(deleteButton)
}

function createTaskElement(teskText){
    const newTask = document.createElement('li')
    const taskTextNode = document.createTextNode(teskText)
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button')

    newTask.appendChild(taskTextNode)

    editButton.classList.add('btn-li')
    editButton.classList.add('edit')
    editButton.textContent = 'V'
    editButton.setAttribute('onclick', 'editTask()')

    deleteButton.classList.add('btn-li')
    deleteButton.classList.add('delete')
    deleteButton.innerHTML = 'X'
    deleteButton.setAttribute('onclick', 'deleteTask(event, this)')

    newTask.appendChild(editButton)
    newTask.appendChild(deleteButton)

    return newTask
}

function addTask(){
    const taskInput = document.querySelector('#taskInput')
    const taskText = taskInput.value.trim();

    if(taskText) {
        const taskList = document.querySelector('#taskList')
        const newTask = createTaskElement(taskText)

        taskList.appendChild(newTask)
    }
}

btn.setAttribute('onclick', 'addTask()');