
function myFunc(){
    let flashLight = document.querySelectorAll('.round')

    let i 
    for( i = 0 ; i < flashLight.length ; i ++){
        flashLight[i].style.backgroundColor = "green";
        setTimeout(myFunc , 2000)
    }
}

myFunc()