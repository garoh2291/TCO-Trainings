let infoTable = document.querySelector('tbody')

let myStaff = [
    {
        id: '1',
        name: 'Adam',
        surname: 'Levine',
        position: 'Singer',
    },
    {
        id: '2',
        name: 'Jamie',
        surname: 'Vardy',
        position: 'Footballer',
    },
    {
        id: '3',
        name: 'Christopher',
        surname: 'Nolan',
        position: 'Film Director',
    },
    {
        id: '4',
        name: 'Avet',
        surname: 'Barseghyan',
        position: 'Songwriter',
    },
]



function myContent() {



    for (let i = 0; i < myStaff.length; i++) {

        let staffInfo = document.createElement('tr');
        infoTable.appendChild(staffInfo)

        for (let x of Object.values(myStaff[i])) {
            let detail = document.createElement('td');
            let detailText = document.createTextNode(x);
            detail.appendChild(detailText);
            staffInfo.appendChild(detail)

        }

        let deleteBtn = document.createElement('button')
        let deleteBtntxt = document.createTextNode('Delete')
        deleteBtn.appendChild(deleteBtntxt)
        staffInfo.appendChild(deleteBtn)

        deleteBtn.onclick = function () {
            staffInfo.remove()
        }


        let editBtn = document.createElement('button')
        let editBtntxt = document.createTextNode('Edit')
        editBtn.appendChild(editBtntxt)
        staffInfo.appendChild(editBtn)

        editBtn.onclick = function () {
            let applyBtn = document.createElement('button')
            let applyBtntxt = document.createTextNode('apply')
            applyBtn.appendChild(applyBtntxt)
            staffInfo.replaceChild(applyBtn, editBtn)

            let allBtn = document.querySelectorAll('button')


            staffInfo.contentEditable = 'true';
            applyBtn.contentEditable = 'false';



            applyBtn.onclick = function () {
                staffInfo.contentEditable = 'false';
                staffInfo.replaceChild(editBtn, applyBtn);
            }


        }


    }
}


myContent()





