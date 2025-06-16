// adding tasks in the array

document.addEventListener('DOMContentLoaded',()=>{
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let tasks = JSON.parse(localStorage.getItem('tasks') )|| [];

tasks.forEach(task => renderTask(task));

addButton.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(newTask);
  saveTasks() // to save tasks in local storage
  renderTask(newTask)
  todoInput.value = ""; // clear input
  console.log(tasks);
});

function renderTask(task){
  const li= document.createElement('li')
  li.setAttribute('data-id',task.id)
  if(task.completed) li.classList.add("completed") //adding class to a task if completed
  li.innerHTML=`
  <span>${task.text}</span>
  <button> delete</button>
  `;// screen pe task ko render ya display karane ke liye list bnai
  li.addEventListener('click', (e)=>{
            if(e.target.tagName=='BUTTON') return //ignoring button
            task.completed =!task.completed
            li.classList.toggle('completed')
            saveTasks()
  })

  li.querySelector('button').addEventListener('click',(e)=>{
         e.stopPropagation() // prevent toggle from firing
         tasks=  tasks.filter(t=> t.id != task.id)
         li.remove()
         saveTasks()
  })

  todoList.appendChild(li)
}
//adding tasks in local storage

function saveTasks(){
  localStorage.setItem('tasks', JSON.stringify(tasks))  // localStorage invokes localStorage API
}

})