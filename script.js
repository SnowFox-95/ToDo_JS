const dom = {
    new_task: document.getElementById('new_task'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks')
}
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
        const  checked = task.isComplete
            ? 'checked': ''
        const taskHtml = `
        <div id="${task.id}" class="${cls}">
            <label class="todo_checkbox">
                <input type="checkbox" ${checked}>
                    <div></div>
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
}