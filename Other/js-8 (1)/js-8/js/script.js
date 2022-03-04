
//window.alert("ok"); 
//alert("ok");

//console.log(this);

///////////////////////////


// let car  ={
//     year: 2020,
//     color: "red",
//     func: function() {
//         console.log(this.color)
//     }
// }
// car.func()

////////////////////////////


// let car  ={
//     year: 2020,
//     color: "red",   
// }

// function func1(){
//     console.log(this)
// }

//func1.bind(car)();

// let total = func1.bind(car);
// total()


//////////////////////////////


// let person = {
//     name: "John",
//     surname: "Doe",
//     fullName: function(){
//         console.log(`Hello ${this.name} ${this.surname}  `)
//     }
// }



// person.fullName();


///////////////////////////////////

// let box = document.querySelectorAll('div');

// for(let i of box){
//     i.onclick = function(){
//         console.log(this.innerHTML)
//     }
// }

/////////////////////////////////////

// let box = document.querySelectorAll('div');

// for(let i of box){
//     i.onclick = function(){
//         console.log(this.id)
//     }
// }

///////////////////////////////////////


let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")

box1.onclick = function(){
    console.log(this);
}
box2.onclick = function(e){
    e.stopPropagation()
    console.log(this);
}
box3.onclick = function(e){
    e.stopPropagation()
    console.log(this);
}