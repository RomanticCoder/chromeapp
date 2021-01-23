const js_toDo = document.querySelector(".js_toDo"),
    todoInput = js_toDo.querySelector("input");
const ul = document.querySelector(".pending");

js_toDo.addEventListener("submit", addToDo);

let toDo_list = [];
let todo_id;
const TODO_LS = "toDos";

function saveList(){
    localStorage.setItem(TODO_LS,toDo_list);
}

function handleDelete(event){
    const target_id = (event.target.parentNode.id);  
    console.log(target_id);
    let target = document.getElementById(target_id);
    toDo_list.splice(target_id,1);
    saveList();
    loadList();
}

function paintList(text){
    const li = document.createElement("li"),
        div = document.createElement("div"),
        span = document.createElement("span"),
        delBtn = document.createElement("button");
    
    span.innerHTML = text;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click",handleDelete);
    //div.appendChild(delBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = todo_id;
    ul.appendChild(li);
    todo_id++;
}

function addToDo(event){
    event.preventDefault();
    console.log(toDo_list);
    toDo_list.push(todoInput.value);
    saveList();
    todoInput.value = '';
    loadList();
}

function loadList(){
    todo_id = 0;
    ul.innerHTML = '';
    const list = localStorage.getItem(TODO_LS);
    if(list){
        list.split(",").forEach((text) =>{
            paintList(text);
        })
        toDo_list = list.split(",");

    }
}

function init(){
    loadList();
}

init();