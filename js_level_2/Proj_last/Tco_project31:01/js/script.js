import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { ref,set,onValue, getDatabase } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";
var loggedUser = {};
let id = 1;
let msgId = 1;
const firebaseConfig = {
    apiKey: "AIzaSyC0UAso5okHP_VKNEkmEoUutXw25a7-gRo",
    authDomain: "finalmessenger-d8416.firebaseapp.com",
    projectId: "finalmessenger-d8416",
    storageBucket: "finalmessenger-d8416.appspot.com",
    messagingSenderId: "828781259368",
    appId: "1:828781259368:web:519ef9168214f4a92a69dd",
    measurementId: "G-5K0SBL9KPZ"
  };

let userArray =[]
let messageArray = []
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const userRef = ref(db,'Users');
const messageRef = ref(db,'messages');
// const idRef = ref(db,'id');//for id in base


function writeUser(user) {
    userArray.push(user);
    set(userRef, userArray);
}

function writeMessage(message) {
    messageArray.push(message);
    set(messageRef, messageArray);
}

// function incrementId() {
//     set(idRef, ++id);
// }/////////////id setter 

class User {
    constructor(name,email,login,password){
        this.name = name.trim();
        this.email = email.trim();
        this.login = login.trim();
        this.password = password.trim();
        this.id = id++
    }    
}



function Message(text,time){
    // this.userId = loggedUser.id
    this.text = text
    if(!time){
        this.time = new Date().toLocaleString()
    }else{
        this.time = time;
    }
    this.id = msgId++;
}


document.getElementById('sigUpBtn').onclick = regFunc
document.getElementById('sendBtn').onclick = sendMessage

function sendMessage(e){
    e.preventDefault()
    let $message = document.getElementById('message-text')
    let msg = new Message($message.value)
    writeMessage(msg);
    $message.value = '';
    console.log(loggedUser);

    
}


function regFunc(e){
    e.preventDefault()
    let $nameReg = document.getElementById('nameReg')
    let $emailReg = document.getElementById('emailReg') 
    let $loginReg = document.getElementById('loginReg') 
    let $pwdReg = document.getElementById('pwdReg')
    let usr = new User($nameReg.value,$emailReg.value,$loginReg.value,$pwdReg.value)
    writeUser(usr)
    // incrementId();
    if($nameReg.value && $emailReg.value &&$loginReg.value &&$pwdReg.value ){
        alert('You are registrated')
        $nameReg.value = '';
        $emailReg.value = '';
        $loginReg.value = '';
        $pwdReg.value = '';
        changeLog()
    }
    
}




onValue(userRef,(snapshot)=>{
    snapshot =snapshot.val();
    let usersInDb = snapshot.map(usr=>{
        return new User(usr.name,usr.email,usr.login,usr.password)
    })

    userArray = usersInDb
    console.log(usersInDb);
})


// onValue(idRef,(snapshot)=>{
//     id = snapshot.val();
//     console.log(id);
// });


document.getElementById('signInBtn').onclick = login;



function login(e) {
    e.preventDefault()
    let login = document.getElementById('loginLogin').value;
    let pass = document.getElementById('loginPassword').value;

    get(userRef, `users`).then((snapshot) => {
        snapshot = snapshot.val()

        // snapshot.map((user)=>{
        //     if(user.login === login){
        //         if(user.password === pass){
        //             return user
        //         }
        //     }
        // })
        let oneUsr = snapshot.forEach(user=>{
            if(user.login === login){
                if(user.password === pass){
                    return user
                }
            }
        })

        loggedUser = oneUsr
        console.log(loggedUser);
        console.log(loggedUser.name);
        
          
        
           
    });

    
    onValue(messageRef,(snapshot)=>{
        snapshot = snapshot.val()
        let messages = snapshot.map(msg=>{
            return new Message(msg.text,msg.time)
        })
    
        messageArray = messages
    
    
        let myMsg = document.getElementById('chat-window')
        myMsg.innerHTML = ''
    
        messages.forEach(x=> {    
            myMsg.innerHTML += `<div class="one_msg" id="one-msg"><span id="icon">${messageArray.name}</span><span>${x.text}</span><span><sub>${x.time}</sub></span></div>`
        })
    
        console.log(messageArray);
    })
    
    chatClick()

}








//////////////////////////////////////////////
const some = document.querySelectorAll('.website')
document.getElementById('home').onclick = homeClick;
document.getElementById('info').onclick = infoClick;
document.getElementById('login').onclick = loginClick;
document.getElementById('chat').onclick = loginClick;

function btnFunc(){
    let navBtn = document.querySelectorAll('.nav-button')
    for(let x of navBtn){
        x.addEventListener('click',function(){
            for(let x of navBtn){
                x.classList.remove('active_btn')
            }  
            x.classList.add('active_btn')
        })
    }
}

function homeClick(){
    for(let i of some){
        i.classList.add('hide')
    }
    document.getElementById('home-content').classList.remove('hide')
    btnFunc()
}

function infoClick(){
    for(let i of some){
        i.classList.add('hide')
    }
    document.getElementById('info-content').classList.remove('hide')
    btnFunc()
}

function loginClick(){
    for(let i of some){
        i.classList.add('hide')
    }
    document.getElementById('login-content').classList.remove('hide')
    btnFunc()
}

function chatClick(){
    for(let i of some){
        i.classList.add('hide')
    }
    document.getElementById('chat-content').classList.remove('hide')
    btnFunc()
}

/*------ Info Section Slideshow------------*/
const slideImg = document.getElementById('slide-img')
let imgArray = [
    "images/0a2d3016f375.jpg",
    "images/6f03eb85463c.jpg",
    "images/842fe5699220.jpg",
    "images/d6bf0c928b5a.jpg"
]

let changeImg = 0
slideImg.src = imgArray[0]
function mySlide(){
    slideImg.src = imgArray[changeImg]
    if(changeImg < imgArray.length - 1){
        changeImg++
    }else{
        changeImg = 0;
    }
    setTimeout(mySlide ,2000)
}

mySlide()
/*---------------Info Section accordion-------------------*/
let infoDiv = document.querySelectorAll('.info-small')

for(let i of infoDiv){
    i.addEventListener('click',function(){
        for(let i of infoDiv){
            i.classList.remove('active')
        }  
        i.classList.add('active')
    })
}

/*---------------Login Section -------------------*/
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const containerLogin = document.getElementById('container-login');

signUpButton.addEventListener('click', () =>
containerLogin.classList.add('right-panel-active'));


signInButton.onclick = changeLog
function changeLog(){
    containerLogin.classList.remove('right-panel-active')
}
// signInButton.addEventListener('click', () =>
// containerLogin.classList.remove('right-panel-active'));
/*---------------Light and Dark mode--------------------*/
const $darkBtn = document.getElementById('dark-btn');
const $lightBtn = document.getElementById('light-btn');
$darkBtn.onclick = darkPage;
$lightBtn.onclick = lightPage;

function darkPage(){
    document.body.style.background = '#1b1b1b'
}

function lightPage(){
    document.body.style.background = '#f6f5f7'
}
/*---------------Loader-------------------*/
let $loader = document.querySelector('.forload')

window.addEventListener('DOMContentLoaded', function(){
    
    setTimeout(() => {
        $loader.style.display = 'none' 
    }, 1500);
})

/*---------------Firebase codes-------------------*/
