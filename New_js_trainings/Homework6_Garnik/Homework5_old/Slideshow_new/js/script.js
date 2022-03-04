let i = 0 ;
let images = [
    'images/auQo0L.jpg',
    'images/H5MI2l.jpg',
    'images/OMqi2S.jpg',
    'images/Zo1yYS.jpg',
    'images/wallpapersden.com_landscape-pixel-art_800x600.jpg'
];



/*-----------First for automatic slideshow----------*/

// function mySlide(){
//     document.myImg.src = images[i]
//     if(i < images.length - 1){
//         i++
//     }else{
//         i = 0;
//     }

//     setTimeout(mySlide ,2000)
// }


// window.onload = mySlide

/*-----------Second for manual slideshow----------*/

let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
btn.onclick = function(){
    document.myImg.src = images[i++]

    if(i >= images.length -1){
        i = 0
    }
    
}

btn2.onclick = function(){
    document.myImg.src = images[i--]
    if( i < 0){
        i= images.length - 1
    }
}