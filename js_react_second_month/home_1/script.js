const $paragraph = document.querySelectorAll("p");
let n = 15;

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min)
};

$paragraph.forEach((item,index,array)=>{
    array[index].style.fontSize = `${n+=5}px`;
    array[index].style.color = `rgb(${getRandom(0 , 255)}, ${getRandom(0 , 255)}, ${getRandom(0 , 255)})`
})