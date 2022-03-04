let myArr = [13  ,5 ,7 ,9 , 4, 17 , 3, 'I am string' , 11 , 21  , 111, true]
function someFunc(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 == 0) {
            console.log(true);
            break
        }
        
        
        
        if(i = arr.length -1 && arr[i]%2 != 0){
            console.log(false);
        }
        
        
        

        
        
    }
    
}


someFunc(myArr)
