const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUSer";
const SHOWING = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function paintGreeting(text){
    greeting.classList.add(SHOWING); 
    form.classList.remove(SHOWING);
    greeting.innerHTML = `Welcome, ${text}`;  
}

function handleSubmit(event){
    /* event.preventDefault()
        => if the event doesn't get explicitly handled, default action X */
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}

function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
}

function loadName(){
    const currentUSer = localStorage.getItem(USER_LS);
    if(currentUSer === null){
        //if it's empty
        askForName();
    }else{
        //if it has a value
        paintGreeting(currentUSer);
    }
}

function init(){
    loadName();
}

init();