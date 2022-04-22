function htmlContent(text,id){
    const $wrap = document.querySelector('.wrapper')
    const imgSrc = [
        'https://onex.am/img/svg/step1.svg',
        'https://onex.am/img/svg/step2.svg',
        'https://onex.am/img/svg/step3.svg',
    ]
    const item = document.createElement('div');
    item.className = "item";
    const img = document.createElement('img');
    img.setAttribute('src', imgSrc[id])

    const textFromBack = document.createElement('h6');
    textFromBack.textContent = text;

    item.appendChild(img);
    item.appendChild(textFromBack);

    $wrap.appendChild(item)
}

const backend_url = "https://jsonplaceholder.typicode.com"


fetch(`${backend_url}/posts`)
    .then(res => res.json())
    .then(data=> {
        data.forEach((item,index)=>{
            if(index <= 2){
                htmlContent(item.body,index)
            }
        })
    })