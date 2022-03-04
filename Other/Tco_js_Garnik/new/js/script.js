


// $(document).ready(function(){
    
    
//     let myApi = $.ajax({
//         method: "GET",
//         url: 'https://jsonplaceholder.typicode.com/posts',
//         success: function(data) {
            
//             let myDiv = document.createElement('div')
//             document.body.prepend(myDiv)
//             myDiv.className = 'bigClass'

            
            
//             data.forEach(
           
//             x => myDiv.innerHTML += `<div class='smalldiv'><p>${x.id}</p> 
//             <p>${x.userId}</p> 
//             <p>${x.title }</p> 
//             <p>${x.body}</p></div>` )  
//     }
//     })
// }); 


document.querySelector('#load').addEventListener('click',load)

async function load(){
    let url = 'https://jsonplaceholder.typicode.com/posts';

    let response = await fetch(url)
    let data = await response.json()

    let myDiv = document.createElement('div')
    document.body.prepend(myDiv)
    myDiv.className = 'bigClass'


    let html = data.map(function(x){
        return `<div class='smalldiv'><p>${x.id}</p> 
        <p>${x.userId}</p> 
        <p>${x.title }</p> 
        <p>${x.body}</p></div>` 
    })
    // ul.insertAdjacentHTML('afterbegin',html.join(' '))
    myDiv.innerHTML = html.join(' ')
}
