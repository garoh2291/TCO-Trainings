let infoTable = document.querySelector('tbody')
let addbtn = document.querySelector('#addNew')

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
            deleteBtn.contentEditable = 'false';



            applyBtn.onclick = function () {
                staffInfo.contentEditable = 'false';
                staffInfo.replaceChild(editBtn, applyBtn);
            }


        }


    }
}

myContent()

let $newId = document.getElementById('newId')
let $newName = document.querySelector('#newName')
let $newSur = document.querySelector('#newSur')
let $newPos = document.querySelector('#newPos')






addbtn.onclick = function(e){
    e.preventDefault()
    let obj = {
        id: $newId.value,
        name: $newName.value,
        surname: $newSur.value,
        position: $newPos.value,
    }
    let newInfo = document.createElement('tr');
    infoTable.appendChild(newInfo);
    for (let value of Object.values(obj)) {
        let detail = document.createElement('td');
        let detailText = document.createTextNode(value);
        detail.appendChild(detailText);
        newInfo.appendChild(detail);
    }

    $newId.value = '';
    $newName.value = '';
    $newSur.value = '';
    $newPos.value = '' ;
}


let $loader = document.querySelector('.forload')

window.addEventListener('DOMContentLoaded', function(){
    
    setTimeout(() => {
        $loader.style.display = 'none' 
    }, 3000);
})




















// addbtn.onclick = function(){
//     let newInfo = document.createElement('tr');
//     infoTable.appendChild(newInfo)
//     for (let value of Object.values(obj)) {
//         let detail = document.createElement('td');
//         let detailText = document.createTextNode(value);
//         detail.appendChild(detailText);
//         newInfo.appendChild(detail)
//     }

//     let deleteBtn = document.createElement('button')
//         let deleteBtntxt = document.createTextNode('Delete')
//         deleteBtn.appendChild(deleteBtntxt)
//         newInfo.appendChild(deleteBtn)

//         deleteBtn.onclick = function () {
//             newInfo.remove()
//         }

//         let editBtn = document.createElement('button')
//         let editBtntxt = document.createTextNode('Edit')
//         editBtn.appendChild(editBtntxt)
//         newInfo.appendChild(editBtn)

//         editBtn.onclick = function () {
//             let applyBtn = document.createElement('button')
//             let applyBtntxt = document.createTextNode('apply')
//             applyBtn.appendChild(applyBtntxt)
//             newInfo.replaceChild(applyBtn, editBtn)

//             let allBtn = document.querySelectorAll('button')


//             newInfo.contentEditable = 'true';
//             allBtn.contentEditable = 'false';



//             applyBtn.onclick = function () {
//                 newInfo.contentEditable = 'false';
//                 newInfo.replaceChild(editBtn, applyBtn);
//             }


//         }

// }


