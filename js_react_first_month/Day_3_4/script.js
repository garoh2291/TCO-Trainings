/* ----------------------- HomeWork_4 -------------------------- */

// 1 .Ռեկուրսիայով հաշվել և վերադարձնել տրված թվի ֆակտորիալը։

function numFactorial(a){
    if(a === 1) return 1;
    return a * numFactorial(a - 1);
}

console.log("Factorial of 6 will be:",numFactorial(6));

// 2 .Գրել calculate անունով ֆունկցիա, որը կընդունի երկու number և մեկ string տիպի փոփոխականներ։ String-ով փոխանցելու ենք նրան գործողությունը, 
// և ֆունկցիան կկատարի այդ գործողությունը տրված թվերի հետ և կվերադարձնի արդյունքը։ Որպես գործողություն ընդունում ենք 
// մաթեմատիկական հետևյալ գործողությունները՝ “plus”, “minus”, “mult”, “div” : Օրինակ, եթե ֆունկցիան կանչենք հետևյալ կերպ, calculate(15, 6, “plus”),
//  ապա կհաշվի 15-ի ու 6-ի գումարը, հետևյալ դեպքում՝ calculate(15, 6, “mult”) դրանց արտադրյալը և այլն։

function calculate(a,b, operator){
    if(operator === "plus")return a + b;
    if(operator === "minus")return a - b;
    if(operator === "mult")return a * b;
    if(operator === "div")return a / b;
}

//for example
console.log(calculate(9,5,"mult"));

// 1. Ստեղծել person անունով օբյեկտ, որը կունենա հետևյալ հատկությունները (property)՝ name, surname, address, age: Տպել օբյեկտը։

const person = {
    name : "John",
    surname: "Snow",
    address: "London",
    age: 30, 
}

// 2. Ստեղծել դատարկ car օբյեկտ, որից հետո ավելացնել color, model, year հատկությունները։
const car = {};
car.color = "Black";
car.model = "Honda";
car.year = 2012;

console.log("My car properties are:",car);

// 3. Ստեղծել ֆունկցիա, որը կընդունի name, surname, age արգումենտներ և կվերադարձնի օբյեկտ՝ նշված հատկություններով։

makePerson = function(name,surname,age){
    return {
        name: name,
        surname: surname,
        age: age,
    }
}

console.log(makePerson("Adam","Smith",23));

// 4. Ունենք 1-ին խնդրի օբյեկտը։ propmt-ով ներմուծում ենք key-ի անունը, ծրագիրը կտպի այդ հատկության value-ն:

// let key = prompt("Write property key!!!");
// alert(`Person ${key} is ${person[key]}`)

// 5. Խնդիր 204, էջ 29

let number = 4793;
while (number >= 1) {
    let item = number % 10; 
    console.log("item",item) 
    number = (number - item) / 10; 
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ----------------------- HomeWork_5 -------------------------- */

// 1. Ունենք հետևյալ օբյեկտը՝....
// salaries օբյեկտին ավելացնել մեթոդ, որը վերադարձնում է աշխատավարձերի ընդհանուր գումարը։

const salaries = {
 John: 100,
 Ann: 160,
 Tina: 130,
 countSalary : function(){
    return this.John + this.Ann + this.Tina
 },
}

console.log("Summary will be:",salaries.countSalary());

// 2. Ունենք հետևյալ կոդը՝....
// user և admin օբյեկտներին ավելացնել greeting key, որի value-ն sayHi ֆունկցիան է, 
// կանչել   sayHi ֆունկցիան առանձին և տրված օբյեկտների greeting մեթոդները:

let user = { 
    name: "John",
};

let admin = { 
    name: "Admin" ,
};   

function sayHi() {
    console.log(this.name);
}

user.greeting = sayHi
admin.greeting = sayHi

user.greeting();
admin.greeting();

// 3. Ունենք հետևյալ կոդը՝...
// object  -ին ավելացնել getLocation key, 
// որի value-ն getLocation ֆունկցիան է, 
// կանչել   getLocation ֆունկցիան առանձին և տրված օբյեկտի getLocation  մեթոդը։ 
// Բացատրել կոդի աշխատանքը

let object = { 
    location: "20 Mashtots ave, Yerevan, Armenia" 
};       

function getLocation() {
    console.log(this.location);
}

object.getLocation = getLocation ;

object.getLocation()//in this case THIS = object => function shows object.location  
getLocation()//in this case THIS = Global Object(Browser) => function shows method location in global object

//4. 164  ը գրքից

const n = 11;
for(let i = 100 ; i <= 999 ; i++) {
    if(Math.sqrt(i) === n) console.log(i + 1);
}