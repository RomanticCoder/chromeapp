const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const toDos = [];
const TODOS_LS = "toDos";

function saveToDos(){
    //추가되었다면 그 todolist를 저장하자
    localStorage.setItem(TODOS_LS,toDos);
}

function paintToDos(){
    // todolist를 몽땅 보여주자
    
    
}

function handleSubmit(event){
    event.preventDefault();
    const currentItem = toDoInput.value;
    toDos.push(currentItem);
    saveToDos();
    paintToDos();
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();