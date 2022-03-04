// let newArray = [1,2,3,4,5] ;
// let justNum = 0
// function myFunc() {
//     for(i=0 ; i < newArray.length ; i++){
        

//         justNum += newArray[i]; } 
//         console. log(justNum)
        

// }


// myFunc() 


// let myObj = {
//     model : 'Audi',
//     year: 2020 ,
//     color: 'Red'
// }


// let myArray = ['Audi' , "opel"]

/////////////////////////////////////////
// method is integrated function by js



let newArr1 = [5, 6, 16,4 ,1 , 12, 7, 9, 21,2] ;
let newArr2 = [7, 8, 55,66 ,88 , 45, 8, 16, 78,5] 




function newArrFunc(arr){
    let empty = []
    for(let i=0 ; i < arr.length ; i++ ){
        empty.push(arr[i])
    }
    
    console.log(empty);
}


newArrFunc(newArr1)
newArrFunc(newArr2)



