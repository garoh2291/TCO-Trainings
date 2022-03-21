const $spans = document.querySelectorAll('span');

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min)
};

$spans.forEach(span => {
    span.onclick = function(){
        let fSize = parseFloat(span.style.fontSize)
        span.style.fontSize = `${fSize += 2}px`
        span.style.color = `rgb(${getRandom(0 , 255)}, ${getRandom(0 , 255)}, ${getRandom(0 , 255)})`
    }
})