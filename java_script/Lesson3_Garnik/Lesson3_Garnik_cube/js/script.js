let cubSize = document.getElementById("myCube");
let n = 200
let i=0


function bigCube(){
  
    
        n += 5 
        i += 30
    
    cubSize.style.width = `${n}px`
    cubSize.style.height = `${n}px`
    cubSize.style.transform = `rotate(${i}deg)`

}





