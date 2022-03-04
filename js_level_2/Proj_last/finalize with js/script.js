import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import {
    getFirestore,
    collection,
    setDoc,
    getDocs,
    doc,
    onSnapshot,
    getDoc,
    query
} from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();


//Constants
let loggedUser = {};
const usersRef = collection(db, "users");
const $email = document.getElementById('loginEmail')
const $password = document.getElementById('loginPassword')
const $firstName = document.getElementById('fNameReg')
const $lastName = document.getElementById('lNameReg')
const $regPassword = document.getElementById('pwdReg')
const $regEmail = document.getElementById('emailReg')






document.addEventListener('DOMContentLoaded', event => {

});

document.getElementById('sigUpBtn').onclick = registrUsr
function registrate(email, password, firstName, lastName) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            loggedUser = new User(firstName, lastName, email, userCredential.user.uid);

            setDoc(doc(usersRef, userCredential.user.uid), {firstName: firstName, lastName:lastName, email: email}).then(alert('Registered Successfully')).catch(alert);
            console.log(loggedUser);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
}


function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            loggedUser = userCredential.user;
            const userRef = doc(db, "users", userCredential.user.uid);
            getDoc(userRef).then((snapshot)=>{
                loggedUser = new User(snapshot.data().firstName, snapshot.data().lastName,snapshot.data().email);
                alert("Logged Successfully");
                console.log(loggedUser);
            }).catch(alert);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
        chatClick()
        document.getElementById('chat').onclick = chatClick;


}

function logOut() {
    loggedUser = {};
    loginClick()
}

function registrUsr(e){
    e.preventDefault()
    registrate($regEmail.value, $regPassword.value, $firstName.value, $lastName.value)
}

function logMe(e) {
    e.preventDefault()

    login($email.value, $password.value);
}


document.getElementById('signInBtn').onclick = logMe;


function User(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}





































//////////////////////////////////////////////
const some = document.querySelectorAll('.website')
document.getElementById('home').onclick = homeClick;
document.getElementById('info').onclick = infoClick;
document.getElementById('login').onclick = loginClick;
document.getElementById('chat').onclick = loginClick;
document.getElementById('logOut').onclick = logOut;



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







































/////////////////////////////////////////////


const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})


modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});