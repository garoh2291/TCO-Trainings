console.log('Hello');
let firstNote = 1000;
let secondNote = 2000;
let thirdNote = 5000;
let fourthNote = 10000;

let moneyQuest = +prompt('How Much money You want to withdraw??')
let noteQuest = +prompt(`Press 1: If You want note ${firstNote}
Press 2: If You want note ${secondNote}
Press 3: If You want note ${thirdNote}
Press 4: If You want note ${fourthNote}`)

function calcMe(note){
    let otherNote = moneyQuest % note;
    resault = Math.floor(moneyQuest / note) ;
    resault2 = otherNote / firstNote
    if(otherNote == 0){
        alert(`Take Your ${resault} pc of ${note} note `)
    }else{
        alert(`Take Your ${resault} pc of ${note} note and ${resault2} pc of ${firstNote} note `)
    }   
}

if(noteQuest == 1 ){
    calcMe(firstNote)
}else if(noteQuest == 2){
    calcMe(secondNote)
}else if(noteQuest ==3){
    calcMe(thirdNote)
}else if(noteQuest == 4){
    calcMe(fourthNote)
}else{
    alert('Please input right numbers')
}