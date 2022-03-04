let login = document.getElementById('login')
let password = document.getElementById('password')
let mail = document.getElementById('mail')
let btn = document.getElementById('btn')
let lebLog = document.getElementById('lebLog')
let LebPass = document.getElementById('LebPass')
let LebMail = document.getElementById('LebMail')
let checkMe = document.getElementById('therms')

btn.onclick = function(event){
    let forLogin = /\b([A-Z])([a-z]+)?.{7,}\b/gm;
    let forPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let forMail = /@g(mail)?mail\.com$/gi
    event.preventDefault()
    if(login.value.trim().match(forLogin)){
        console.log('passed');
        lebLog.style.color = 'green'
      
    }else{
        lebLog.style.color = 'red'
    }
    if(password.value.trim().match(forPassword)){
        console.log('passed'); 
        LebPass.style.color = 'green'
 
    }else{
        LebPass.style.color = 'red'
    }
    if(mail.value.trim().match(forMail)){
        console.log('passed');  
        LebMail.style.color = 'green'

    }else{
        LebMail.style.color = 'red'
    }
    
    if(login.value.trim().match(forLogin) && password.value.trim().match(forPassword) && mail.value.trim().match(forMail)){
        location.href = "https://garoh2291.github.io/Tco-Fasion_site/";
    }
}


