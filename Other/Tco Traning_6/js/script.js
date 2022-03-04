let login = document.getElementById('login')
let password = document.getElementById('password')
let btn = document.getElementById('btn')

let h4 = document.getElementById('h4')

btn.onclick = function(e){
    let a = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    e.preventDefault()
    if(login.value.match(a)){
        h4.innerHTML = 'ok'
    }else{
        h4.innerHTML = 'stop'
    }
}









