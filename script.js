const dom = {
    new_task: document.getElementById('new_task'),
    add: document.getElementById('add'),
    tasks: document.getElementById('tasks')
}
const tasks = [];


// Отслеживаем клик по кнопке Добавляем задачу
dom.add.onclick = () => {
    const task = dom.new_task.value
    if (task) {
        addTask(task)
        dom.new_task.value = ''
    }
}

// Функция добавления задачи
function addTask(text) {
    const timestamp = Date.now()
    const task = {
        id: timestamp,
        text,
        isComplete: false
    }
    tasks.push(task)
    console.log(tasks)
}