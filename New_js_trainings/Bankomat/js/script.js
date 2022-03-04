let firstCash = document.querySelector('#firstCash')
let secondCash = document.querySelector('#secondCash')
let thirdCash = document.querySelector('#thirdCash')
let fourthCash = document.querySelector('#fourthCash')

let firstNote = 1000;
let secondNote = 2000;
let thirdNote = 5000;
let fourthNote = 10000;

let inputCash = document.querySelector('#inputCash');
let cashBut = document.querySelector('#cashBut');
let cashText = document.querySelector('#withdrawText')
let noteQuest ;

firstCash.addEventListener('click' , function(){
    noteQuest = '1';
})

secondCash.addEventListener('click' , function(){
    noteQuest = '2';
})

thirdCash.addEventListener('click' , function(){
    noteQuest = '3';
})

fourthCash.addEventListener('click' , function(){
    noteQuest = '4';
})



function calcMe(note){
    let otherNote = +inputCash.value % note;
    resault = Math.floor(+inputCash.value / note) ;
    resault2 = otherNote / firstNote
    if(otherNote == 0){
        cashText.textContent = `Take Your ${resault} pc of ${note} note`
    }else{
        cashText.textContent = `Take Your ${resault} pc of ${note} note and ${resault2} pc of ${firstNote} note`
    }   
}


cashBut.addEventListener('click' , function(){
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
})