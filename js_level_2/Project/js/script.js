import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import {getDatabase, ref,set, onValue, } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
console.log(db);



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