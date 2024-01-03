let input_box = document.getElementById("inputbox");
let data = document.getElementById("data");
let addbutton = document.getElementById("add");
let save = document.getElementById("save");
save.style.display = "none";
let taskList = [];
function addTask() {
    taskList.push(input_box.value);
    let input = input_box.value;
    let indexofEle = taskList.indexOf(input);
    console.log("ind====>", indexofEle);
    let index = taskList.length - 1;
    let tasks = document.createElement("p");
    tasks.innerHTML = `<b><p>${input}</p><button class="comp" onclick="complete(this)">COMPLETE</button>
    <button class="edit" onclick="edit(${index})">EDIT</button>
    <button class="delete" onclick="deleteTask(${index},this)">DELETE</button></b>`;
    data.appendChild(tasks);
    input_box.value = '';
    console.log("taskList[]===>", taskList);
}
function complete(button) {
    let compEle = button.parentElement;
    let task = compEle.querySelector("b p");
    task.style.textDecoration = "line-through";
    console.log("completed task==>", task);
}
function deleteTask(index, button) {
    let delEle = button.parentElement;
    taskList.splice(index, 1);
    delEle.remove();
    console.log("deleted element", index);
    console.log("tasklist===>", taskList);
}
function edit(index) {
    save.style.display = "block";
    addbutton.style.display = "none";
    input_box.value = taskList[index];

    save.onclick = function () {
        const newvalue = input_box.value;
        taskList[index] = newvalue;
        input_box.value = "";
        save.style.display = "none";
        addbutton.style.display = "block";
        data.innerHTML = '';
        for (let i = 0; i < taskList.length; i++) {
            const taskss = taskList[i];
            const taskElement = document.createElement("p");
            taskElement.innerHTML = `
                <b><p>${taskss}</p>
                <button class="comp" onclick="complete(this)">COMPLETE</button>
                <button class="edit" onclick="edit(${index}, this)">EDIT</button>
                <button class="delete" onclick="deleteTask(${index}, this)">DELETE</button></b>
            `;
            data.appendChild(taskElement);
        }
    };
    console.log("tasklist===>", taskList);
}
function allTask() {

    let taskElements = document.querySelectorAll("#data b");
    for (let i = 0; i < taskElements.length; i++) {
        taskElements[i].style.display = "block";
    }
}
function completedTask() {
    let taskElements = document.querySelectorAll("#data b p");

    for (let i = 0; i < taskElements.length; i++) {
        let taskElement = taskElements[i];
        if (taskElement.style.textDecoration === "line-through") {
            taskElement.parentElement.style.display = "block";
        } else {
            taskElement.parentElement.style.display = "none";
        }
    }
}
function pendingTask() {
    let taskElements = document.querySelectorAll("#data b p");

    for (let i = 0; i < taskElements.length; i++) {
        let taskElement = taskElements[i];
        if (taskElement.style.textDecoration !== "line-through") {
            taskElement.parentElement.style.display = "block";
        } else {
            taskElement.parentElement.style.display = "none";
        }
    }
}








