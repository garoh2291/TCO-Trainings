

// let myObj = {
//     model: "audi",
//     year: 2020,
//     color: "red",
// }

// console.log(myObj);

// let myArr = ["audi", "opel", "mercedes", "bmw"];
// console.log(myArr);


// let myUser = {
//     name: "valod",
//     age: 25,
//     married: true,
// }

// let arrUser = ["Valod", "armen", "artak"]


////////////////////////////////////////

// let workers = ["Armen", "Valod", "Petros"];
// console.log(workers.length)

// let arr = [1, 5, "string", false, undefined, null];
// console.log(arr[2]);

//let sumArr = [2, 6, 12, 1, 7, 24, 3, 9];
// sumArr.sort();
// sumArr.reverse()
// console.log(sumArr);


// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];

// let arr3 = arr1.concat(arr2, [9, 10])

// console.log(arr3);


//let cars = ["audi", "bmw", "mersedes", "opel", "Infiniti"];
// cars.pop();
// cars.push('toyota')
// cars.shift()
// cars.unshift('Toyota')
// delete cars[2] //chi kareli

// cars.splice(2, 1)

// cars.splice(0, 0,  "Давай", "танцевать");
// let newCar =  cars.slice(0, 2)


// console.log(newCar);



// let arr = [1, 0, "hello", false];

// console.log( arr.includes("hello") );


// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 2, name: "Маша"}
//   ];
  
//   let user = users.find(elem => elem.id <= 2  );
  
//   console.log(user.name); 


let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let someUsers = users.filter(x => x.id <= 2);
  
 console.log(someUsers);


let lengths = ["Bilbo", "Gandalf", "Nazgul"];

let newMap = lengths.map(x => console.log(x + "hello"));
console.log(lengths)

// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ');
// console.log(arr);

// let arr = ['Вася', 'Петя', 'Маша'];

// let str = arr.join('-'); 
// console.log( str );

// let sum = [1, 2, 3, 4, 5];

// let newSum = sum.reduce((num1, num2) => num1 + num2);

// console.log(newSum);

// let myArr = ["Bilbo", "Gandalf", "Nazgul"];
// myArr.forEach((item, index, array) => {
//     console.log(`${item} имеет позицию ${index} в ${array}`);
//   });




// console.log(typeof []);
// console.log(typeof {}); 

// console.log(Array.isArray({})); 
// console.log(Array.isArray([]));



// let arr = [5, 6, 16, 4, 1, 12, 7, 9, 21, 2];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i] + 100);
// }


// for(let i = 0; i < 100; i--){
//     console.log(i);
// }

// let arr = [5, 6, 16, 4, 1, 12, 7, 9, 21, 2];
// for(let i in arr){
//     console.log(arr[i])
// }


// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         break
//     }
//     console.log(i)
// } 


// for(let i = 0; i < 10; i++){
//     if(i == 5){
//         continue
//     }
//     console.log(i)
// } 



// let emptyArr = [];