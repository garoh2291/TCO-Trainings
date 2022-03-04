

let arr = [
    {
        id: "1",
        name: "Arman",
        surname: "Yepremyan",
        email: "epremyan.arman@gmail.com"
    },
    {
        id: "2",
        name: "Arman",
        surname: "Yepremyan",
        email: "epremyan.arman@gmail.com"
    },
    {
        id: "3",
        name: "Arman",
        surname: "Yepremyan",
        email: "epremyan.arman@gmail.com"
    }
]




// var body = document.getElementsByTagName("body")[0];

let table1 = document.getElementById("ourTable");
let tbody1 =  document.getElementById("ourTbody");

for(let i = 0;i<arr.length;i++){
    let tr1 = document.createElement("tr");
    
    
    tbody1.appendChild(tr1)

    for(let value of Object.values(arr[i])){
        let td1 = document.createElement("td");
        let td1Text = document.createTextNode(`${value}`);
        td1.appendChild(td1Text);
        tr1.appendChild(td1);
       
    }
    let tdEdit = document.createElement("button");
    let tdEditText = document.createTextNode("Edit");
    tr1.appendChild(tdEdit);
    tdEdit.appendChild(tdEditText)

    let tdDelete = document.createElement("button");
    let tdDeleteText = document.createTextNode("Delete");
    
    tr1.appendChild(tdDelete);
    tdDelete.appendChild(tdDeleteText)
    tdDelete.onclick = function (){
        tr1.remove();
    }
    tdEdit.onclick = function(){
        
        tr1.contentEditable = 'true'; td1.designMode='on'; void 0
      
    }
  
    
}
body.appendChild(table1);
table1.appendChild(tbody1);

