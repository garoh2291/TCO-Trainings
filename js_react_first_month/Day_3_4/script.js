let array =  [4 , 7 , 9 ,68 , 32 , 8 ,9 , 18];

// const k = 6 ;
// let count = 0;

// for (let index = 0; index < array.length; index++) {
//     if(index % k === 0 ) count++ ;
// }

// console.log(count);

// function  getMaxElementInArray(arr){
//     let max = arr[0]
//     for (let index = 1; index < arr.length; index++) {
//         let element = arr[index]
//         if(element > max) max= element
        
//     }
//     return max
// }

// const r = getMaxElementInArray(array)
// console.log(r);


// array.sort((a,b)=> a - b)
// console.log(array[array.length-1]); 


function newFunc(arr,a,b){
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element >= a && element <= b ) newArr.push(element)
    }
    return newArr
}


let r = newFunc(array,20,70);
console.log(r);