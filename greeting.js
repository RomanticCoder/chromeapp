const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const CURRENT_US = "currentUser";

const SHOWING = "showing";

function showName(){
    const currentUser = localStorage.getItem(CURRENT_US);
    form.classList.remove(SHOWING);
    greeting.innerHTML = `Welcome ${currentUser}`;
    greeting.classList.add(SHOWING);

}

function saveName(){
    localStorage.setItem(CURRENT_US,input.value);
}

function getName(){
    form.classList.add(SHOWING)
    form.addEventListener("submit", saveName);
}

function init(){
    if(localStorage.getItem(CURRENT_US) !== null){
        // has user name
        showName();

    }else{
        // no user name
        getName();
    }
}

init();