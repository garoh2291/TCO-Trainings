// /*--------------------Homework 6 -----------------*/

// // 1. Ստեղծել ֆունկցիա, որը կընդունի 3 թվեր ու կվերադարձնի տրված թվերից բաղկացած զանգված։

// function makeArrayFromDigits(a,b,c){
//     const arr = [];
//     arr.push(a,b,c);
//     return arr
// }

// const newArray = makeArrayFromDigits(4,7,12)
// console.log('New array is:',newArray);

// // 2. Գրել ֆունկցիա, որը կընդունի զանգված և կվերադարձնի վերջինիս զույգ էլեմենտների արտադրյալը։

// const array = [17 , 65 ,2 , 8 , 6 , 9 ,11 ,37 ,]

// function countMultOddNumb(arr){
//     let mult = 1;
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(element % 2 === 0) mult *= element;
//     }
//     return mult
// }

// const oddMultResult = countMultOddNumb(array);
// console.log('Result is ',oddMultResult);

// // 3. Խնդիր 232, էջ 31
// function oddNumbQty(arr){
//     let count = 0;
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(element % 2 === 0) count++;
//     }
//     return count
// }

// const oddNumbQtyCount = oddNumbQty(array);
// console.log('Odd numbers quantity = ', oddNumbQtyCount);

// // 4. Ռեկուրսիայով տպել a-ից b միջակայքն ընկած բոլոր ամբողջ թվերը։
// // 1st solution
// function logNumbersFromRange(a,b){
//     console.log(a);
//     if(a >= b ) return a ;
//     return logNumbersFromRange(a + 1, b)
// }
// logNumbersFromRange(3,10)


// // 5.Տրված է հետևյալ զանգվածը՝...
// // Ցիկլով որոշել, եթե զանգվածի հերթական էլեմենտը զույգ է, տպել այդ թիվը։

// const array2 = [45,45,8,8,6,9,87,4,7,8,89,4,8,6,9,87,4,7,8,89,4]

// function logOddNumbFromArray(arr){
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(element % 2 === 0) console.log(element);
//     }
// }

// logOddNumbFromArray(array2)

/*--------------------Homework 6 -----------------*/

// // 1. Հաշվել զանգվածի զույգ տարրերի արտադրյալը (կիրառել forEach)

// const numArray = [7 , 11 , 4, 9 , 5 , 8 , 57 , 6 , 13 , 97 , 31];

// let mult  = 1;
// numArray.forEach(item => {if(item % 2 === 0) return mult *= item});
// console.log(mult);

// // 2. Հաշվել զանգվածի 10-ից փոքր տարրերի գումարը (կիրառել reduce)

// let summary =  numArray.reduce((num, item)=>{
//     if(item < 10) return num += item;
//     return num;
// },0)

// console.log(summary);

// // 3. Տրված է թվեր պարունակող զանգված և k թիվ։ Ստանալ և տպել նոր զանգված, որի էլեմենտները նախկին զանգվածի էլեմենտներից k անգամ փոքր են(map)։
// const numArray2 = [3 , 6 , 12 , 24 , 27 , 30];
// const k = 3;
// const smallDigitsArray = numArray2.map(item => item / k)
// console.log(smallDigitsArray);

// // 4. Տրված է թվեր պարունակող զանգված և k թիվ։ Ստանալ և տպել նոր զանգված, որը չի պարունակի տրված k թիվը(filter)։
// const numArray3 = [4 , 6  , 3 , 11 , 17]

// const filteredArray = numArray3.filter(item => item !== k)
// console.log(filteredArray);