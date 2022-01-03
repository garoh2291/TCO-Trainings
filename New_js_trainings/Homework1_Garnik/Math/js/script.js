let buttonPlus = document.querySelector('#plusBut')
let plusXY = document.querySelector('#plusXY')
let input1 = document.querySelector('#plusX')
let input2 = document.querySelector('#plusY')

buttonPlus.addEventListener('click', function(){
    plusXY.textContent = +input1.value + +input2.value

} )

let buttonMinus = document.querySelector('#minusBut')
let minusXY = document.querySelector('#minusXY')
let input3 = document.querySelector('#minusX')
let input4 = document.querySelector('#minusY')

buttonMinus.addEventListener('click', function(){
    minusXY.textContent = +input3.value - +input4.value

} )


let buttonInc = document.querySelector('#incBut')
let incXY = document.querySelector('#incXY')
let input5 = document.querySelector('#incX')
let input6 = document.querySelector('#incY')

buttonInc.addEventListener('click', function(){
    incXY.textContent = +input5.value * +input6.value

} )


let buttonDivide = document.querySelector('#divideBut')
let divideXY = document.querySelector('#divideXY')
let input7 = document.querySelector('#divideX')
let input8 = document.querySelector('#divideY')

buttonDivide.addEventListener('click', function(){
    divideXY.textContent = +input7.value * +input8.value

} )