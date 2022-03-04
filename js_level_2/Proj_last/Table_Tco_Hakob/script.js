import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { ref,set,onValue, getDatabase } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4bhvZE2EPhXEwTvXom8HXiNQjZIGzyo8",
    authDomain: "tcotable.firebaseapp.com",
    databaseURL: "https://tcotable-default-rtdb.firebaseio.com",
    projectId: "tcotable",
    storageBucket: "tcotable.appspot.com",
    messagingSenderId: "1085689024745",
    appId: "1:1085689024745:web:b9a4295510bcca53966078",
    measurementId: "G-QL953TNYV5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const userRef = ref(db,'users');




let usersArray = [];


function writeUserData(user) {
    usersArray.push(user);
    set(userRef, usersArray);
}

let count = 1
function Admin(fName, lName, isChecked, id = count++) {
    this.count = 1
    this.isAdmin = isChecked;
    this.lastName = lName;
    this.firstName = fName;
    this.id = id
}


class TableMaker{
    constructor(tableId) {
        this.table = document.getElementById(tableId);
        

        let row = document.createElement('tr');
        let cl1 = document.createElement('th');
        let cl2 = document.createElement('th');
        let cl3 = document.createElement('th');
        let cl4 = document.createElement('th');

        cl1.innerText = 'No.';
        cl2.innerText = 'First Name';
        cl3.innerText = 'Last Name';
        cl4.innerText = 'Is Admin?';

        this.appendTo(row,cl1);
        this.appendTo(row,cl2);
        this.appendTo(row,cl3);
        this.appendTo(row,cl4);

        this.table.append(row);
    }


    createColumn(text){
        const newCl = document.createElement('td');
        newCl.innerText = text;
        return newCl;
    }

    reset(){
        this.table.innerText = '';
        this.table = document.getElementById('AdminsTable');
        

        let row = document.createElement('tr');
        let cl1 = document.createElement('th');
        let cl2 = document.createElement('th');
        let cl3 = document.createElement('th');
        let cl4 = document.createElement('th');

        cl1.innerText = 'No.';
        cl2.innerText = 'First Name';
        cl3.innerText = 'Last Name';
        cl4.innerText = 'Is Admin?';

        this.appendTo(row,cl1);
        this.appendTo(row,cl2);
        this.appendTo(row,cl3);
        this.appendTo(row,cl4);

        this.table.append(row);
    }

    createRow(tdArr){
        const newRow = document.createElement('tr');
        tdArr.forEach(x=>newRow.append(x));

        return newRow;
    }

    objToTable(user){
        
        let cl = this.createColumn(user.id);
        let cl1 = this.createColumn(user.firstName);
        let cl2 = this.createColumn(user.lastName);
        let cl3 = this.createColumn((user.isAdmin)?'Yes':'No');
        let cl4 = document.createElement('button')
        cl4.innerText = 'Delete'
        

        let row = this.createRow([cl,cl1,cl2,cl3,cl4]);
        row.setAttribute('data-id',user.id)
        cl4.addEventListener('click',(e) =>{
            e.stopPropagation()
            let id = e.target.parentElement.getAttribute('data-id');
        })
        this.appendTo(this.table, row);

    }

    

    appendTo(parent,child){
        parent.append(child);
    }
}




let MainTable = new TableMaker('AdminsTable');


function test(){
    let name = document.getElementById('name');
    let surName = document.getElementById('surname');
    let isAdmin = document.getElementById('admin');
    let obj = new Admin(name.value,surName.value, isAdmin.checked);
    console.log(obj);
    MainTable.reset();
    writeUserData(obj);
}

document.getElementById('submit').onclick = test;


onValue(userRef,(snapshot)=>{

    console.log(snapshot)
    snapshot=snapshot.val();
    let users = snapshot.map(x=> {

        return new Admin(x.firstName,x.lastName,x.isAdmin);

    });

    usersArray = users;

    users.forEach(x=>MainTable.objToTable(x));
})



// fetch('https://reqres.in/api/users?page=2')
//     .then((response) => response.json())
//     .then((responseJSON) => {
//         // do stuff with responseJSON here...
//         // let users =  responseJSON.data.map(x=>new Admin(x.first_name,x.last_name,false,x.id));
//
//         let users = responseJSON.data.map(x=> {
//
//             return new Admin(x.first_name,x.last_name,false,x.id);
//
//         });
//
//         console.log(users);
//
//         users.forEach(x=>MainTable.objToTable(x));
//
//
//     });