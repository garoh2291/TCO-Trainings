let numArr = [5 , 9 , 8 ,2 , 224 ,975 , 98 , 35 , 11]


function correctSort(a,b){
    return a - b
}




console.log(numArr.sort(correctSort));
/* -------------- or ---------------------*/

console.log((numArr.sort((a , b) => a - b)));