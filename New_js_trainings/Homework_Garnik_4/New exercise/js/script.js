function newUser(x , y){
    a = {};
    a.Position = x;
    a.Name = y;
    a.Salary = sal1;
    return a
}

let pos1 = document.querySelector('#pos1').textContent
let name1 = document.querySelector('#name1').textContent
let but1 = document.querySelector('#but1')
let butcalc = document.querySelector('#calcme')
 but1.addEventListener('click' , function(){
    sal1 = document.querySelector('#sal1').value
})





let bigFirm = [
    newUser(pos1,name1)
]

butcalc.addEventListener('click' , function(){
    console.log(bigFirm);
})



