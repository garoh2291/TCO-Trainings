import { $wrapper } from "./elements.js";
import { appendUserCard ,NewUsr, DelUsr ,DetailUsr} from "./dom.js"
import { myApi ,jsonPlaceholderApi } from './api.js';


document.querySelector('.add_user').addEventListener('click',()=>{
    document.querySelector('.form_new_user').classList.toggle('show');
    document.querySelector('.new_user_generate').reset()
})

document.querySelector('.close_form').addEventListener('click',()=>{
    document.querySelector('.form_new_user').classList.remove('show');
    document.querySelector('.new_user_generate').reset()

})

$wrapper.addEventListener('click',(event)=>{
    event.stopPropagation()
    if(event.target.classList.contains('avatar-img')) {
        document.querySelector('.sidebar').classList.add('show_side')
        document.querySelector('.container').classList.add('small-cont')
    }else{
        document.querySelector('.sidebar').classList.remove('show_side')
        document.querySelector('.container').classList.remove('small-cont')
    }
})



//

const new1 = new NewUsr()

const deleteUser = new DelUsr

const detailUser = new DetailUsr
