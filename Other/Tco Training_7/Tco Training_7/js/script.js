// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// let btn3 = document.querySelector('#btn3');

// btn1.addEventListener('click' , function(){
//     btn1.classList.add('active')
//     btn2.classList.remove('active')
//     btn3.classList.remove('active')
// })

// btn2.addEventListener('click' , function(){
//     btn1.classList.remove('active')
//     btn2.classList.add('active')
//     btn3.classList.remove('active')
// })

// btn3.addEventListener('click' , function(){
//     btn1.classList.remove('active')
//     btn2.classList.remove('active')
//     btn3.classList.add('active')
// })

let btn = document.querySelectorAll('button')



for(let i of btn){
    i.onclick = function(){
        for( let i of btn){
            i.classList.remove('active')
        }
        i.classList.add('active')
    }
}