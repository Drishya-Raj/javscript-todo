let text = document.getElementById("inputbox");
let data = document.getElementById("data");
let addbutton = document.getElementById("add");
function addTask() {
   if (text.value == "") {
      alert("You have to enter something");
   }
   else {
      let newtask = document.createElement("li");
      newtask.innerHTML = text.value + `<button id="completed" onclick="completeTask(this)">COMPLETE</button>
      <button id ="edit" onclick="editTask(this)">EDIT</button>
      <button id= "delete" onclick="deleteTask(this)"> DELETE </button>`;
      data.appendChild(newtask); 
      console.log('text__',newtask);
   }
   text.value=""; 
}
console.log('data==>',data);
console.log('text==>',text);


function completeTask(button) {
   const listItem = button.parentElement;
   listItem.style.textDecoration = "line-through";
}
function deleteTask(button) {
   const listItem = button.parentElement;
   listItem.remove();
}
function editTask(button) {
   alert("Do you want to edit the task ? Then press ok");
   const listItem = button.parentElement;
   const newtext = listItem.firstChild.textContent;
   text.value = newtext;
   listItem.remove();
}
//filter section
function allTask() {
   const listItems = document.getElementsByTagName('li');
   for (let i = 0; i <= listItems.length; i++) {
      const listItem = listItems[i];
      listItem.style.display = "block";
      console.log(listItem);
   }
}
function completedTask() {
   const listItems = document.getElementsByTagName('li');
   for (let i = 0; i <= listItems.length; i++) {
      const listItem = listItems[i];
      if (listItem.style.textDecoration === "line-through") {
         listItem.style.display = "block";
      }
      else {
         listItem.style.display = "none";
      }
   }
}
function pendingTask() {
   const listItems = document.getElementsByTagName('li');
   for (let i = 0; i <= listItems.length; i++) {
      const listItem = listItems[i];
      if (listItem.style.textDecoration !== "line-through") {
         listItem.style.display = "block";
      }
      else {
         listItem.style.display = "none";
      }
   }
}