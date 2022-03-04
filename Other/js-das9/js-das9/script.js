
// sum()
// function sum(){
//     console.log("hello");
// }

// sum()
// let sum = () => {
//     console.log("hello");
// }


// let sum = (a, b) =>{
//     console.log(a + b);
// }
// sum(5, 4)

// let sum = (a, b) => console.log(a + b);
// sum(5, 4)

//////////////////////////////////////////

// let age = prompt('Сколько вам лет?', '');
// age > 18 ? console.log(true) : age == 10 ? alert("ok") : console.log(false);;


// if(age > 18){
//     alert(true)
// }else if(age == 10){
//     alert("ok")
// }else{
//     alert(false)
// }

/////////////////// - Call Back - //////////////////////

// function one(x){
//     x()
//     console.log("one");
// }

// function two(){
//     console.log("two");
// }
// one(two);

// function first(x) {
//     x()
//     console.log(1);
// }
// function second(a, b) {
//     console.log(a + b)
// }

// first(function(){
//     second(5,4)
// })



/////////////// - Local Storage - ///////////////////

// let num = 10;

// localStorage.setItem("myNum", num.toString());
// let numLoc = localStorage.getItem("myNum");
//localStorage.removeItem('myNum');
//localStorage.clear()
// console.log(numLoc);

/////////////////////////////////////////////////

// const arr = [8, 2, 4];

// localStorage.setItem('myArr', JSON.stringify(arr));
// let myArray = localStorage.getItem('myArr');
// console.log(myArray);



///////////////////////////////////////


let obj = {
    'name': "Hrachya",
    'age': 15,
}



localStorage.setItem("myObj", JSON.stringify(obj));
let myObject = localStorage.getItem("myObj");

let obj3 = JSON.parse(myObject);
obj3.name = "Davit";
console.log(obj3);

localStorage.setItem("newObj", JSON.stringify(obj3))
let newObject = localStorage.getItem('newObj')
console.log(newObject);