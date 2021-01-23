const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

let toDos = [];
const TODO_LS = "toDos"


function handleDelete(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanedList = toDos.filter((toDo)=>{
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanedList;
    saveToDo();
}

function saveToDo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const li = document.createElement("li");
    const newId = toDos.length + 1;

    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", handleDelete);
    span.innerHTML = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id : newId
    }
    toDos.push(toDoObj);
    saveToDo();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadList(){
    const loadedList = localStorage.getItem(TODO_LS);
    if(loadedList !== null){
       const parsedList = JSON.parse(loadedList);
       parsedList.forEach((toDo) =>{
           paintToDo(toDo.text);
       })
    }
}

function init(){
    loadList();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();