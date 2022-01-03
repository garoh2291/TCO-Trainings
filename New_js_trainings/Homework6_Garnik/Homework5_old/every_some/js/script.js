let numArr = [1 ,3 ,5 ,7 , 342, 25 , 6,234 , 6,4 , 121, 4, 122,1454 , -6 , -2]


/* ---------- one of array items is negative number ---------------- */

function   someFunc(arr){
    arr.sort((a,b) => a - b )
    if(arr[0] < 0){
        console.log(true);
    }else{
        console.log(false);
    }
}
someFunc(numArr)


/* ---------- all of array items are negative number --------------- */


function   everyFunc(arr){
    arr.sort((a,b) => a - b )
    if(arr[arr.length - 1 ] < 0){
        console.log(true);
    }else{
        console.log(false);
    }
}


everyFunc(numArr)
