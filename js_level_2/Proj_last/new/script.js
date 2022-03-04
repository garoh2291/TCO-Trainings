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
const $email = document.getElementById('email')
const $password = document.getElementById('password')
const $firstName = document.getElementById('firstName')
const $lastName = document.getElementById('lastName')
const $regPassword = document.getElementById('regPassword')
const $regEmail = document.getElementById('regEmail')






document.addEventListener('DOMContentLoaded', event => {

});

document.getElementById('regbtn').onclick = registrUsr
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
}

function logOut() {
    loggedUser = {};
}

function registrUsr(e){
    e.preventDefault()
    registrate($regEmail.value, $regPassword.value, $firstName.value, $lastName.value)
}

function testing(e) {
    e.preventDefault()

    login($email.value, $password.value);
}

function loginMe(e){
    e.preventDefault()
}

document.getElementById('logbtn').onclick = testing;


function User(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}