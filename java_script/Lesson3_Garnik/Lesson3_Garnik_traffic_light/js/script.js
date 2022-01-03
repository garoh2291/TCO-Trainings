function trafficLight() {
    let redBox = document.getElementById("red")
    let yellowBox = document.getElementById("yellow")
    let greenBox = document.getElementById("green")

    setTimeout(function() {
        redBox.style.background = "red"
        yellowBox.style.background = "grey"
        greenBox.style.background = "grey"
    },  2000)

    setTimeout(function() {
        redBox.style.background = "red"
        yellowBox.style.background = "orange"
        greenBox.style.background = "grey"
    },  4000)

    setTimeout(function() {
        redBox.style.background = "grey"
        yellowBox.style.background = "grey"
        greenBox.style.background = "green"
    },  6000)

    setTimeout(function() {
        redBox.style.background = "grey"
        yellowBox.style.background = "orange"
        greenBox.style.background = "green"
    },  8000)
    

    
}

let repeatFunc = setInterval(function() {
    trafficLight()
}, 8000)

trafficLight()


