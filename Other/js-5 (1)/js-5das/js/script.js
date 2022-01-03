

// let obj = {
//     name: "Valod",
//     surname: "Petrosyan",
//     age: 20,
//     married: false,
//     cash: null,
//     addres: undefined,
//     obj2: {citizen: "armenian"},
//     arr: [1, 2, 4],
//     func: function(){
//         console.log("this is a function");
//     }
// }

// obj.func();


let user = { 
    name: "John",
    age: 30, 
};

for(let i in user){
    console.log(user[i]);
}


// let user = { 
//     "name": "John",
//     "age": 30, 
//  };


// alert( "age" in user ); //true
// alert( "blabla" in user ); //false

////////////////////////////////////



// let message = "Привет!";
// let phrase = message;

// console.log(phrase)

////////////////////////////////////

// let user = { name: "Ivan" };

// let admin = user;

// admin.name = "Valod"

// console.log(user);

///////////////////////////

// let user = { 
//     name: "Ivan",
//     age: 30,
// };

// let admin = {};

// for(let i in user){
//     admin[i] = user[i]
// }

// admin.name = "valod"


// console.log(user);

////////////////////////////////

// let user = { 
//     name: "Ivan",
//     age: 30,
// };

// delete user.name

// console.log(user);

//////////////////////////////////

// let user = { name: "Иван" };
// let user1 = { canEdit2: true };
// let user2 = { canEdit: true };

// Object.assign(user, user1, user2)

// console.log(user);

///////////////////////////////////

// let a = {};
// let b = a;

// console.log(a === b);

// let a = {};
// let b = {};

// console.log(a === b);


function isBigEnough(element) {
    return element >= 10;
  }
console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
console.log([12, 54, 18, 130, 44].some(isBigEnough)); // true