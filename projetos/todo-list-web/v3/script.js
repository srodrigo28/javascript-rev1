const btn = document.querySelector('#addButton');

function editTask(editButton){ 
    const taskElement = editButton.parentElement;
    const taskTextNode = taskElement.firstChild;
    const taskText = taskTextNode.textContent
    const newTaskText = prompt("Digite o novo texto: ", taskText)
    
    try{
        const newTaskTextNode = document.createTextNode(newTaskText)
        console.log(newTaskTextNode, taskElement)
        taskElement.replaceChild(newTaskTextNode, taskTextNode)
    }catch(error){
        console.log('error: ' + error)
    }
    
}

function deleteTask(deleteButton){ 
    const taskElement = deleteButton.parentElement;
    taskElement.remove()
}

function createTaskElement(teskText){
    const newTask      = document.createElement('li')
    const taskTextNode = document.createTextNode(teskText)
    
    const editButton   = document.createElement('button');
    const deleteButton = document.createElement('button')

    newTask.appendChild(taskTextNode)

    editButton.classList.add('btn-li')
    editButton.classList.add('edit')
    editButton.textContent = 'V'
    editButton.setAttribute('onclick', 'editTask(this)')

    deleteButton.classList.add('btn-li')
    deleteButton.classList.add('delete')
    deleteButton.innerHTML = 'X'
    deleteButton.setAttribute('onclick', 'deleteTask(this)')

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