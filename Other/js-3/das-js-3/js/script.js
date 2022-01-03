
// function sayHello() {
//     console.log("hello");
// }

// sayHello()

////////////////////////////

// function sum(x) {
//     console.log(x + 5);
// }
// sum(10);
// sum(3);
// sum(6)


//////////////////////////////

// function sumFunc(a, b){
//    console.log(a + b);
// }
// sumFunc(5,10)

///////////////////////////

// function sum(a = 5, b = 6){
//     console.log(a + b);
// }

// sum(2, 4)

//////////////////////////////

// function num(a){
//    return a
// }
// alert(num(5 + 6))

////////////////////////

// let x = 10;

// function num(a){
//     x = x + 5;
//     a = a + x;
//     return a
//  }
//  alert(num(20));
//  console.log(x);

///////////////////////



// function myFunc(){
//    var x = 10;
//    x = x + 5;
//    return x;
   
// }
// console.log(myFunc());


////////////////////////////////////

// function comeBack(){
//     return 9;
// }

// console.log(comeBack() + 3);
// console.log(comeBack() + 8);
// console.log(comeBack() + 10);

////////////////////////////////

// function forClick(){
//     console.log("the button was clicked");
// }

///////////////////////////////

// function forClick(a){
//     console.log(a + 5);
// }

///////////////////////////////////////


// let a1 = true;
// let a2 = false

// function twoA(a1 = 1,a2 = 2){
//   console.log(a1,a2)
// }
// twoA();

///////////////////////////////////////


// let age = +prompt('enter your age');
// let clientYear = +prompt('enter your birth year');

// function para(num){ 
//    let year = 2021;
//    console.log(year - num);
// }

// para(age);
// para(clientYear);

///////////////////////////////////


// function num1() {
//     console.log(1);
// }
// function num2() {
//     console.log(2);
// }
// num1();
// num2()

//////////////////////////////

// function timeFunc(){
//     alert("ok")
// }

// setInterval(timeFunc, 3000)



// setTimeout( function(){
//     alert("ok")
// }, 3000)

// let stopFunc = setInterval( function(){
//     alert("ok")
// }, 3000)

// function stop(){
//     clearInterval(stopFunc)
// }


////////////////////////////////


let redBox = document.getElementById("red");
redBox.style.background = "red"

/////////////////////////////////


// function num(){
//     let number = Math.floor(Math.random() * 100)+100;
    
//     let inter = setInterval( function(){
//         if(number > 50){
//             number -= 5;
//             console.log(number);
//          }
//         if(number <= 50){
//             alert("Finish");
//             clearInterval(inter)
//         }
//     }, 1000)
// }

// num()