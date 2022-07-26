const dom = {
    new_task: document.getElementById('new_task'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks'),
    count: document.getElementById('count')
}

//Массив задач
const tasks = [];


// Отслеживаем клик по кнопке Добавляем задачу
dom.add.onclick = () => {
    const newTaskText = dom.new_task.value
    if (newTaskText && isNotHaveTask(newTaskText, tasks)) {
        addTask(newTaskText, tasks)
        dom.new_task.value = ''
        //console.log(tasks)
        tasksRender(tasks)
    }
}

// Функция добавления задачи
function addTask(text, list) {
    const timestamp = Date.now()
    const task = {
        id: timestamp,
        text,
        isComplete: false
    }
    list.push(task)

}

// Проверка существования задачи в массиве задач
function isNotHaveTask(text, list) {
    let isNotHave = true

    list.forEach((task) => {
        if (task.text === text) {
            alert('Задача уже существует!')
            isNotHave = false
        }
    })

    return isNotHave
}

// Функция вывода списка задач
function tasksRender(list) {
    let htmlList = ''

    list.forEach(task => {
        const cls = task.isComplete
            ? 'todo_task todo_task_complete'
            : 'todo_task'
        const checked = task.isComplete
            ? 'checked' : ''
        const taskHtml = `
        <div id="${task.id}" class="${cls}">
            <label class="todo_checkbox">
                <input type="checkbox" ${checked}>
                <div class="todo_checkbox-div"></div>
            </label>
            <div class="todo_task-text">
                ${task.text}
            </div>
            <div class="todo_task-del">-</div>
        </div>
        `

        htmlList = htmlList + taskHtml
    })

    dom.tasks.innerHTML = htmlList

    renderTaskCount(list)
}

//Отслеживаем клик по чекбоксу задачи
dom.tasks.onclick = (event) => {
    const target = event.target
    const isCheckboxEl = target.classList.contains('todo_checkbox-div')
    const isDeleteEl = target.classList.contains('todo_task-del')

    if (isCheckboxEl) {
        const task = target.parentElement.parentElement
        const taskId = task.getAttribute('id')
        changeTaskStatus(taskId, tasks)
        tasksRender(tasks)
    }
    if (isDeleteEl) {
        const task = target.parentElement
        const taskId = task.getAttribute('id')
        deleteTask(taskId, tasks)
        tasksRender(tasks)
        
    }
}

//Функция изменения статуса задачи
function changeTaskStatus(id, list) {
    list.forEach((task) => {
        if (task.id == id) {
            task.isComplete = !task.isComplete
        }
    })
}

//Функция удаления задачи
function deleteTask(id, list) {
    list.forEach((task, idx) => {
        if (task.id == id) {
            list.splice(idx, 1)
        }
    })
}

// Вывод количества задач
function renderTaskCount(list) {
    dom.count.innerHTML = list.length
}