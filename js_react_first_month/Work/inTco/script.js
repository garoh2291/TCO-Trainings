const testArray = [11, -4, 6, 1, 4, 6, 777, 888]


const sumarry = testArray.reduce(function(count,item){
    if(item % 7 === 0) return ++count 
    return count
},0)

console.log(sumarry);




