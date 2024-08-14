const btn = document.querySelector('#addButton');


function addTask(){
    const taskInput = document.querySelector('#taskInput')
    const taskText = taskInput.value.trim();

    if(taskText) {
        const taskList = document.querySelector('#taskList')

        const newTask = document.createElement('li')
        const taskTextNode = document.createTextNode(taskText)
        newTask.appendChild(taskTextNode)

        taskList.appendChild(newTask)



    }

}

btn.setAttribute('onclick', 'addTask()');