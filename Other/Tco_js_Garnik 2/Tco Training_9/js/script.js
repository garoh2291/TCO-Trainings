// let myLogin = document.querySelector('#login');
// let myPass = document.querySelector('#password');
// let btn = document.querySelector('button');

// let allUsers = [];
// btn.onclick = function(event){
//     event.preventDefault()
//     let obj =  {
//         'Login': myLogin.value,
//         'Password': myPass.value,
//     };

   

//     allUsers.push(obj);
//     console.log(allUsers);

//     for(i = 0 ; i <allUsers.length ; i++ ){
//         localStorage.setItem('info', JSON.stringify(allUsers))
//     }
//     // localStorage.setItem('info', JSON.stringify(obj));
// }

let redBtn = document.querySelector('#redBtn');
let greenBtn = document.querySelector('#greenBtn');
let clearBtn = document.querySelector('#clearBtn');

let redColor = {
    'color' : 'red',
};
let greenColor = {
    'color' : 'green',
};
let clearColor = {
    'color': 'none',
}

redBtn.onclick = function(){
    document.body.style.background = redColor.color
    localStorage.setItem('myColor',JSON.stringify(redColor) )
}


greenBtn.onclick = function(){
    document.body.style.background = greenColor.color
    localStorage.setItem('myColor',JSON.stringify(greenColor) )
}

clearBtn.onclick = function(){
    document.body.style.background = clearColor.color
    localStorage.setItem('myColor',JSON.stringify(clearColor) )
}


function loadColor() {
    let colorNew = localStorage.getItem('myColor')
    let backgroundColor = JSON.parse(colorNew)
    document.body.style.background = backgroundColor.color
}


window.onload(loadColor())