let randArr = [ 6 , 78 ,675 , 902 , 11 , -3  , 15 , 78 , 64 , 951]

function evenNumb(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
    }
}


evenNumb(randArr)


function oddNumb(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 == 0) {
            continue
        }
        console.log(arr[i]);

    }
}

oddNumb(randArr)