import { jsonPlaceholderApi ,jsonPlaceholderApi1} from './api.js';
import { $CONTAINER_USER } from "./elements.js";
import { appendUserCard } from "./dom.js"

//GET
// jsonPlaceholderApi.get('items/read.php')
//     .then(data => {
//         data.forEach(user => {
//             appendUserCard($CONTAINER_USER, user)
//         })
//         const $detailBtn = document.querySelectorAll('.detail-button')


//         for(let i of $detailBtn){
//             i.addEventListener('click',()=>{
//                 const _id = i.parentElement.dataset.id;
//                 console.log(_id);
//                 const detUsr = data.find(user => _id == user.id)
//                 console.log(detUsr);
//                 document.querySelector('#name').value = detUsr.name
//                 document.querySelector('#email').value = detUsr.email
//                 document.querySelector('#phone').value = detUsr.phone
//             })
//         }
//     })


jsonPlaceholderApi1.get('items/read.php')
    .then(data => {
        const itArr = data.items
        itArr.forEach(user=>{
            appendUserCard($CONTAINER_USER, user)

        })
        console.log(data.items);
        
})

// jsonPlaceholderApi.get('users')
// .then(data => {
//     console.log(data);
    
// })

// POST
const _user = {
    'name': "test",
    'email': "name@mail.ru",
    'phone': 323984
}
// jsonPlaceholderApi1.post('items/create.php', _user)
//     .then(data => {
//         console.log("🚀 ~ data", data)
    
//     })


document.querySelector('#new_user').addEventListener('click',function(){
    jsonPlaceholderApi1.post('items/create.php', _user)
    .then(data => {
        console.log(data);
        $CONTAINER_USER.innerHTML = "";
    })
    setTimeout(() => {
        jsonPlaceholderApi1.get('items/read.php')
        .then(data => {
            const itArr = data.items
            itArr.forEach(user=>{
                appendUserCard($CONTAINER_USER, user)

            })
            console.log(data.items);
            
        })
    }, 200);


})





