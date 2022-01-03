let i = 0;

let images = [
    'images/auQo0L.jpg',
    'images/H5MI2l.jpg',
    'images/OMqi2S.jpg',
    'images/Zo1yYS.jpg',
    'images/wallpapersden.com_landscape-pixel-art_800x600.jpg'
];



let slider = document.getElementById('mySlider')
function changePicture() {

    slider.style.backgroundImage = `url(${images[i]})`;

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, 2000);
}



changePicture()







