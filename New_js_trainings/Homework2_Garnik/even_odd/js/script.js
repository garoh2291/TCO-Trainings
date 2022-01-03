let userNumb =  +prompt('Please write any number')
let fixNumb = userNumb.toFixed(0)
let oddEven = fixNumb % 2


console.log(fixNumb);
console.log(oddEven);


switch(oddEven){
    case 1:
        alert('Your number is Odd!!!')
        break;
    case 0:
        alert('Your number is Even!!!')
        break;
    default:
        alert('Dear please write number')
}



