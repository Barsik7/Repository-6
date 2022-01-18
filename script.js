let saveBtn = document.querySelector('.js-save');
let delBtn = document.querySelector('.js-delete');
let taskInput = document.getElementById('task');
let taskUl = document.querySelector('.task-list');
let taskArr = [];

if (localStorage.getItem('taskList')) {
    taskArr = JSON.parse(localStorage.getItem('taskList'));
    addTaskFromLS();
}

function addTaskFromLS() {
    taskArr.forEach(function (item, index, arr) {
        addTaskToUl(item);
    });
}

function addTaskToUl(obj) {
    console.log(obj);
    let li = document.createElement('li');
    li.innerText = `${obj.task}`;
    taskUl.append(li);
}

saveBtn.addEventListener('click', function (event) {
    event.preventDefault();

    if (taskInput.value === '') {
        alert('Введите задачу');
        return;
    }

    let newTask = {
        task: taskInput.value
    }

    addTaskToUl(newTask);

    taskArr.push(newTask);

    localStorage.setItem('taskList', JSON.stringify(taskArr));
});

delBtn.addEventListener('click', function () {
    localStorage.clear();

    taskUl.innerHTML = '';
});