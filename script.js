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
        addTask(newTaskText)
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