function createRow(no, firstName,lastName) {

    let noColumn = document.createElement('td');
    let fNameColumn = document.createElement('td');
    let lNameColumn = document.createElement('td');

        noColumn.innerText = no;
        fNameColumn.innerText= firstName;
        lNameColumn.innerText = lastName;
    let tableRow = document.createElement('tr');


    tableRow.append(noColumn);
    tableRow.append(fNameColumn);
    tableRow.append(lNameColumn);

    return tableRow;
}

let tableRef = document.getElementById('testTable');


let button = document.getElementById('submitButton');

button.onclick = function () {
    let noInput = document.getElementById('no');
    let fNameInput = document.getElementById('fName');
    let lNameInput = document.getElementById('lName');

    tableRef.append(createRow(noInput.value, fNameInput.value, lNameInput.value));

    let user = {
        no:noInput.value,
        firstName:fNameInput.value,
        lastName:lNameInput.value

    }

    localStorage.setItem(user.no, JSON.stringify(user))



    noInput.value = '';
    fNameInput.value = '';
    lNameInput.value = '';

}

for(let key in localStorage){
    let obj = JSON.parse(localStorage.getItem(key));
    tableRef.append(createRow(  obj.no, obj.firstName, obj.lastName))
} 