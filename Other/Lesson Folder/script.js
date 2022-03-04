
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

    noInput.value = '';
    fNameInput.value = '';
    lNameInput.value = '';

}

