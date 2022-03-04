import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import {getDatabase, ref,set, get, onValue } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";
import {  getFirestore ,doc, getDoc  } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js'
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
let id = -1;
var loggedUser = {};
const firebaseConfig = {
    apiKey: "AIzaSyBefT3W3cq-htP4b5OHIIEbZQiXJyjuxBM",
    authDomain: "final-task-tco.firebaseapp.com",
    databaseURL: "https://final-task-tco-default-rtdb.firebaseio.com",
    projectId: "final-task-tco",
    storageBucket: "final-task-tco.appspot.com",
    messagingSenderId: "569384291896",
    appId: "1:569384291896:web:4c6384b87c13699b65a0cd",
    measurementId: "G-NJ8E8VZLKB"
};

let userArray =[]
let messageArray = []
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const userRef = ref(db,'Users');
const messageRef = ref(db,'messages');
const idRef = ref(db,'id');


function writeUser(user) {
    userArray.push(user);
    set(userRef, userArray);
}

function writeMessage(message) {
    messageArray.push(message);
    set(messageRef, messageArray);
}

class User {
    constructor(name,email,login,password,id=-1){
        this.name = name.trim();
        this.email = email.trim();
        this.login = login.trim();
        this.password = password.trim();
        this.id = id;
    }    
}

function incrementId() {
    set(idRef, ++id);
}

function Message(text, time){
    this.text = text
    this.userId = loggedUser.id;
    if(!time) {
        this.time = new Date().toLocaleString()
    }else{
        this.time = time;
    }
    this.id = id++;
}


document.getElementById('sigUpBtn').onclick = regFunc
document.getElementById('sendBtn').onclick = sendMessage

function sendMessage(e){
    e.preventDefault()
    let $message = document.getElementById('message-text')
    let msg = new Message($message.value)
    writeMessage(msg);
    $message.value = '';
}


function regFunc(e){
    e.preventDefault()
    let $nameReg = document.getElementById('nameReg')
    let $emailReg = document.getElementById('emailReg') 
    let $loginReg = document.getElementById('loginReg') 
    let $pwdReg = document.getElementById('pwdReg')
    let usr = new User($nameReg.value,$emailReg.value,$loginReg.value,$pwdReg.value,id)
    writeUser(usr)
    incrementId();
        if($nameReg.value && $emailReg.value &&$loginReg.value &&$pwdReg.value ){
        chatClick()
    }
}


onValue(idRef,(snapshot)=>{
    id = snapshot.val();
    console.log(id);
});

onValue(messageRef,(snapshot)=>{
    snapshot = snapshot.val()
    console.log(snapshot);
    let messages = snapshot.map(msg=>{
        return new Message(msg.text,msg.time)
    })

    messageArray = messages

    let myMsg = document.getElementById('chat-window')
    myMsg.innerHTML = ''

    messages.forEach(x=> {

    
        myMsg.innerHTML += `<div class="one_msg" id="one-msg"><span>${x.text}</span><span><sub>${x.time}</sub></span></div>`
    })
})


// onValue(messageRef,(snapshot)=>{

//     snapshot = snapshot.val();
//     console.log(snapshot);


//     let messages = snapshot.map(x=> {

//         let label = document.createElement('p').innerHTML = x.text
        
//         return label

//     });

//     messageArray = messages

//     console.log(messageArray);
//     // let myMessages = data.map(msg=> {
//     //     let label = document.createElement('p')
//     //     let labelText = document.createTextNode(msg.text)
//     //     label.append(labelText)
//     //     return label
//     // })
    

//     // messageArray = myMessages

//     // const chatContent = document.getElementById('chat-window')
//     // myMessages.forEach(x=> chatContent.append(x))


//     // let users = snapshot.map(x=> {

//     //     return new Admin(x.firstName,x.lastName,x.isAdmin,x.id);

//     // });

//     // usersArray = users;

//     // users.forEach(x=>MainTable.objToTable(x));
// })





//////////////////////////////////////////////
const some = document.querySelectorAll('.website')
document.getElementById('home').onclick = homeClick;
document.getElementById('info').onclick = infoClick;
document.getElementById('login').onclick = loginClick;
document.getElementById('chat').onclick = chatClick;

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

signInButton.addEventListener('click', () =>
containerLogin.classList.remove('right-panel-active'));
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


document.getElementById('signInBtn').onclick = login;



    function login() {
        let login = document.getElementById('loginLogin').value;
        let pass = document.getElementById('loginPassword').value;

        get(userRef, `users`).then((snapshot) => {
         snapshot.val().forEach((user)=>{
             if(user.login === login){
                 if(user.password === pass){
                     loggedUser = user
                 }
             }
         })

        });

    }



/*---------------Firebase codes-------------------*/
