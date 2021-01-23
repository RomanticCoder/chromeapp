'use strict';

const container = document.querySelector(".js_clock"),
    clock = document.querySelector(".clock"),
    date = document.querySelector(".date");

function getCurrentTime(){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    date.innerHTML = `${year} /
                    ${month + 1 < 10? `0${month+1}` : month+1} /
                    ${day < 10 ? `0${day}` : day} `;
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    clock.innerHTML = `${hour < 10 ? `0${hour}` : hour} :
                        ${min < 10 ? `0${min}` : min} : 
                        ${sec < 10 ? `0${sec}` : sec}`;
}
function init(){
    setInterval(getCurrentTime,1000);
}

getCurrentTime();
init();