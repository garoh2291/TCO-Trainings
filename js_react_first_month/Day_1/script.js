/* ---------------- Homework 1 Garnik------------------ */
//Homework 1.1
// let appleWeightStart = 350;
// let pearWeightStart = 145;
// let appleWeightMorning = 350 + 150 ;
// let pearWeightMorning = 145 + 25 ;
// let appleWeightEvening = appleWeightMorning - 85;
// let pearWeightEvening = pearWeightMorning - 26;
// console.log(`At first there were ${appleWeightStart} kg of apples and ${pearWeightStart} kg of pears in the warehouse.`);
// console.log(`In the morning there were ${appleWeightMorning} kg of apples and ${pearWeightMorning} kg of pears in the warehouse.`);
// console.log(`In the evening there were ${appleWeightEvening} kg of apples and ${appleWeightEvening} kg of pears in the warehouse.`);
// // Homework 1.2
// let personAge = 42 ;
// let personName = 'Adam';
// let ispersonMarried = true;
// let personCatName;
// let personSallary = null;
// console.log('personAge',personAge);
// console.log('personName',personName);
// console.log('ispersonMarried',ispersonMarried);
// console.log('personCatName',personCatName);
// console.log('personSallary',personSallary);
// console.log('Type of personAge',typeof personAge);
// console.log('Type of personName',typeof personName);
// console.log('Type of ispersonMarried',typeof ispersonMarried);
// console.log('Type of personCatName',typeof personCatName);
// console.log('Type of personSallary',typeof personSallary);
// // Homework 1.3
// let adamBirth = 1994;
// let alexBirth = 1990;
// let annaBirth = 1972;
// let currentYear = 2022;
// let adamAge = currentYear - adamBirth;
// let alexAge = currentYear - alexBirth;
// let annaAge = currentYear - annaBirth;
// console.log(`Adam is ${adamAge} years old`);
// console.log(`Alex is ${alexAge} years old`);
// console.log(`Anna is ${annaAge} years old`);
// // Exercise 1
// const y = 4;
// const x = 2;
// const a =  y + 1;
// const c1 = Math.pow(x ** 2 +1  , 6);
// const c2 = Math.sin(x ** 2  - 3);
// const c = c1 * c2 ;
// const b = x + c - Math.tan(y);
 
// console.log('Exercise 1 result =', a * b );
// // Exercise 7
// const X = 3 ;
// const Y = 6 ;
// const A = Math.pow(Math.pow(X**2 + Y**2 , 5)+ 4 , 7);
// const B = Math.sin(Math.cos(X+Y));
// console.log('Exercise 7 result = ', A + B);


/* ---------------   HomeWork 2 --------------------- */
// 4. Գրել ծրագիր, որը կընդունի, օրինակ՝ x թիվ, և եթե թիվը մեծ է 1-ից, տպի 1-ից մինչև x թիվն ընկած բոլոր թվերը, հակառակ դեպքում տպի null։ 
// (Լուծման համար կիրառել if և while։ Օրինակ, եթե ներածենք 5 թիվը, արդյունքը կլինի 1 2 3 4 5):

// let a = 5;
// let b = 0;
// if (a <= 1){
//     console.log(null);
// } else{
//     while(b < a){
//         b ++
//         console.log(b);
//     }
// }

// 5. Գրել ծրագիր, որը կընդունի, օրինակ՝ x դրական թիվ, և տպի x -ից մինչև 1-ը ընկած բոլոր թվերը, նվազման կարգով։
//  (Լուծման համար կիրառել do while: Օրինակ, եթե ներածենք 6 թիվը, արդյունքը կլինի 6 5 4 3 2 1):

// let num = 6;
// do{
//     console.log(num);
//     num --;
// }while(num>=1)


// 1. Ցիկլի օգնությամբ, առանց բազմապատկման օպերատորը օգտագործելու, հաշվել x և y թվերի արտադրյալը։

// const x = 8 ;
// const y = 11 ;
// let sum = 0;

// for(let i=0 ; i < y; i++){
//     sum += x
// }
// console.log(sum);

//3. Գրել ծրագիր, որը կստուգի, եթե տրված թիվը զույգ է կամ բաժանվում է 3-ի, տպի true, հակառակ դեպքում՝ false:

// const x = 37;
// let IsNumOddOrDivideThree = false;
// if(x %2 === 0 || x % 3 === 0) IsNumOddOrDivideThree = true;
// console.log(IsNumOddOrDivideThree);


// Exercise 24

// const a = 6;
// const b = 2;
// const c = 2;
// let isNumbersTwo = false;
// if(a === b || a === c || b === c){
//     if(a === 2 || b === 2 || c === 2){
//         isNumbersTwo = true;
//     }
// }

// console.log(isNumbersTwo);

// Exercise 27 

// const a = 2;
// const b = 5;
// const c = 8;

// let isArithmeticProgress = false;
// if (c - b === b - a) isArithmeticProgress = true;
// console.log(isArithmeticProgress);

// Exercise 73

// for (let x = 7.5; x <= 12.5; x += 0.2) {
//     const y = Math.pow(x + 1 , 2);
//     console.log(y);
// }

// Exercise 76

// for (let x = -5; x <= 5; x += 2) {
//     let y = 0;
//     if (x > 0)
//         y = x ** 2 + 4 * Math.pow(x, 8);
// }

// Exercise 159

// let sum = 1;

// for (let i = 100; i <= 999; i++) {
//     if (i % 3 === 1 && i % 4 === 2 ) sum *= i;
// }
// console.log(sum);


///////////////////////////////////////////////////////////



/*---------------- Homework 3 ----------------*/

// 1. Գրել անանուն ֆունկցիա, որը կվերադարձնի Hello my name is Alex ։

const nameCaller = function(){
    return 'Hello my name is Alex'
};

console.log(nameCaller());


// 2. Գրել ֆունկցիա, որը կընդունի 4 հատ թիվ և կվերադարձնի դրանցից ամենամեծը։ (օգտագործել Math.max ֆունկցիան)

function maxNumb(a,b,c,d){
    console.log(Math.max(a,b,c,d));
}

maxNumb(12,4,1,65)

// 3. Խնդիր 55, էջ 11 (օգտագործել Math.min ֆունկցիան)

function countSmallDigit(a){
    const ones  = a % 10;
    const tens = (a - ones) % 100 / 10;
    const hundreds = (a - tens * 10 - ones) / 100;
    return Math.min(ones,tens,hundreds)
}

console.log(countSmallDigit(489)); 

// 4. Գրել ֆունկցիա, որը կհաշվի և կվերադարձնի տրված թվի ֆակտորիալը։ 

function countFactorial(n){
    let mult = 1;
    for( let i = 2 ; i <= n ; i ++){
        mult *= i
    }
    return mult
}

console.log(countFactorial(7));