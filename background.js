const body = document.querySelector("body");
const img_number =2;
function changeBackground(){
    let i = generateRandInt();
    const url = `url(imgs/img${i}.jpg)`
    body.style.backgroundImage = url;
}

function generateRandInt(){
    const num = Math.floor( 1+Math.random() * img_number);
    return num;
}
function init(){
    changeBackground();
    setInterval(changeBackground, 10000);
}

init();
console.log(body);