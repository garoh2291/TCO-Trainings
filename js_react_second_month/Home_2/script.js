const arr = "Lorem ipsum dolor sit amet consectetur adipisicing elit.".split(" ");
$el = document.querySelector('#text')


arr.forEach(item=>{
    $el.innerHtml += `<span>${item}</span>`
})