
// let fullYear = new Date();

// console.log(fullYear);
// console.log(fullYear.getFullYear());
// console.log(fullYear.getMonth())
// console.log(fullYear.getDate())


// let d = new Date(2013, 0, 35); 
// console.log(d);


// let start = Date.now();
// console.log(start);



///////////////REGEXP////////////////////

let text2 = document.getElementById("text").innerHTML;

// let reg1 = /java(script)/gi;

// const text1 = text2.match(reg1);
// console.log(text1);

// const text1 = text2.search(/ java(script)/gi); //gtel veradardzrela indexy arajin
// console.log(text1)


// let str = "I love Java Script Love";

// let rxp = /Love/gi;

// const text1 = str.replace(rxp, "hate" );
// console.log(text1)

let rxp = /\s/;
const text1 = text2.split(rxp); 
console.log(text1)


let str = '<h1>Hello, world!</h1>';
let regexp = /<(.*?)>/g;

let matchAll = str.matchAll(regexp);

matchAll = Array.from(matchAll);

console.log(matchAll);


//////////////////////////////////////////////

let login = document.getElementById("login");
let password = document.getElementById("password");
let btn = document.getElementById("btn");

btn.onclick = function(e){
    e.preventDefault();
    console.log(login.value);
}