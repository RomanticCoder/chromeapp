'use strict';

const  js_form = document.querySelector(".js_form"),
    input = js_form.querySelector("input");
const greeting = document.querySelector(".greeting");

const CURRENT_USER = "currentUser";
const SHOWING = "showing";

function askName(){
    js_form.classList.add(SHOWING);
}

function showName(){
    greeting.classList.add(SHOWING);
    const name =  localStorage.getItem(CURRENT_USER);
    greeting.innerHTML = `Welcome, ${name}`;
}

function saveName(name){
    localStorage.setItem(CURRENT_USER,name);
}

function handleSubmit(event){
    event.preventDefault();
    saveName(input.value);
    js_form.classList.remove(SHOWING);
    showName();
}

function loadName(){
    const currentUser = localStorage.getItem(CURRENT_USER);
    if(currentUser === null){
        askName();
    }else{ //인풋 ㅇ 이름 ㄴ
        showName();
    }

}

function init(){
    loadName();
    js_form.addEventListener("submit", handleSubmit);
}

init();