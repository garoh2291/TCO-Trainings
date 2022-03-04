let timerInput = document.getElementById("manualTime");
let buttonRun = document.getElementById("runBtn")
let timerText = document.getElementById("timerTxt");
let oneBtn = document.getElementById('one')
let twoBtn = document.getElementById('two')
let fiveBtn = document.getElementById('five')
let tenBtn = document.getElementById('ten')

let timeMinut  


buttonRun.onclick = function(){
    
    timeMinut = parseFloat(timerInput.value) * 60


    timer = setInterval(function () {
        seconds = timeMinut%60
        minutes = timeMinut/60%60
        hour = timeMinut/60/60%60
        if (timeMinut < 0) {
            clearInterval(timer);
            alert("Done");
        } else {
            timeMinut--;
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            timerText.innerHTML = strTimer;
            timerText.style.animation = 'none'
        }
        
    }, 1000)
}



twoBtn.onclick= function(){
    timeMinut = 2 * 60


    timer = setInterval(function () {
        seconds = timeMinut%60
        minutes = timeMinut/60%60
        hour = timeMinut/60/60%60
        if (timeMinut < 0) {
            clearInterval(timer);
            alert("Done");
        } else {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            timerText.innerHTML = strTimer;
            timerText.style.animation = 'none'
            timeMinut--;
        }
    }, 1000)
}

fiveBtn.onclick= function(){
    timeMinut = 5 * 60


    timer = setInterval(function () {
        seconds = timeMinut%60
        minutes = timeMinut/60%60
        hour = timeMinut/60/60%60
        if (timeMinut < 0) {
            clearInterval(timer);
            alert("Done");
        } else {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            timerText.innerHTML = strTimer;
            timerText.style.animation = 'none'
            timeMinut--;
        }
    }, 1000)
}


