// let mainWrapper = document.querySelector('.main_wrapper')
// let lightBtn = document.querySelector('#lighMode')
// let darkBtn = document.querySelector('#darkMode')

// darkBtn.onclick = function(){
//     mainWrapper.classList.add('dark')
// }

// lightBtn.onclick = function(){
//     mainWrapper.classList.remove('dark')

// }


let myTable = document.createElement('table')
let secondLine = document.createElement('tr')
document.body.prepend(myTable)

let persons = [
    {
        id: 1,
        name: 'Adam',
        surname: 'Smith',
        salary: 100,
    },
    {
        id: 2,
        name: 'Meri',
        surname: 'Johnson',
        salary: 200,
    },
    {
        id: 3,
        name: 'Alex',
        surname: 'Morgan',
        salary: 400,
    },
]




function myTab() {
    let firstLine = document.createElement('tr')


    for (let i = 0; i < persons.length; i++) {
        let firstLine = document.createElement('tr')
       

        // for (x of firstLine) {
        //     let line1 = document.createElement('td')
        //     let text1 = document.createTextNode(Object.values(x))
        //     line1.appendChild(text1)
        //     firstLine.appendChild(line1)
        //     myTable.appendChild(firstLine)
    // }


    }
}


myTab()


// for(let i=0 ; i < persons.length ; i++){
//     let surnameLine = document.createElement('td')
//     surnameLine.innerHTML = persons[i].surname
//     secondLine.appendChild(surnameLine)
// }

// for(let i=0 ; i < persons.length ; i++){
//     let salaryLine = document.createElement('td')
//     salaryLine.innerHTML = persons[i].salary
//     thirdLine.appendChild(salaryLine)
// }