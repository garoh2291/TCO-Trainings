

// console.log(innerHeight);
// console.log(navigator.platform);

//document.body.style.background = "blue";


// let box1 = document.getElementById('box1');
// console.log(box1);

// let box2 = document.getElementsByClassName('box2');
// console.log(box2);

// let box3 = document.getElementsByTagName('span');
// console.log(box3);


// let box1 = document.querySelector('.box2');
// console.log(box1);


// let box3 = document.querySelectorAll('span')
// console.log(box3);

// for(let i of box3){
//     i.onclick = function(){
//         i.classList.add("active")
//     }
// }

//let arr = box3.forEach(i => console.log(i))

let div = document.querySelector('.forFunc');

function one(){
    div.style.background = 'red'
}

// function two(){
//     div.style.color = 'white'
// }


div.addEventListener("click", function () {
    div.style.color = "white"
});
div.addEventListener("mouseout", function () {
    div.style.background = "yellow"
});
div.addEventListener("mouseover", function () {
    div.style.background = "blue"
});



document.addEventListener('click', function(event) {
   if (event.target !== div) {
     div.setAttribute('style', "background: orange; border: 3px solid black");
   }
});

