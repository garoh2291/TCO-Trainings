import { myApi ,jsonPlaceholderApi } from './api.js';
import { $wrapper } from "./elements.js";

const imgUrl = "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
const imgUrl2 = "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"

const userImgArr = [
    "https://i.etsystatic.com/29388859/r/il/1852b1/3120127459/il_340x270.3120127459_kz1z.jpg",
    "https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg",
    "https://www.pngarts.com/files/5/Cartoon-Avatar-PNG-Photo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyE8gq7PIRwwSZ-WPfdNc-Ux322O0Xmb7_xDWee9ZIUkUe7oqMHSIXeqk4cUR_4EUi60Y&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uzwCvGhb2QKHRMvwqrIfXooecA0St0Ku9_lHZw4QnGMykpom59ZSug63FfYMZfFE0Dw&usqp=CAU",

]

function getRandom(min, max){
    return Math.floor(Math.random() * (max -min) + min)
}

let randomColorIndex = getRandom(0 , userImgArr.length- 1)



export default class DOM {
    static createElement(tagName){
        return document.createElement(tagName);
    }
    static querySelector(selector){
        return document.querySelector(selector);
    }
    static setAttribute(element,attr,value){
        return element.setAttribute(attr,value);
    }
    static appendChild(parent,child){
        return parent.appendChild(child)
    }
}

function createUserCard(user) {
    const {id,name, email,phone} = user;

    // making user card 
    const $userCard = DOM.createElement('div');
    DOM.setAttribute($userCard,'class','user_card');

    //making delete section
    const $deleteUser = DOM.createElement('div');
    DOM.setAttribute($deleteUser,'class','delete_user');
    DOM.setAttribute($deleteUser,'data-id',id)

    const $deleteIcon = DOM.createElement('i');
    DOM.setAttribute($deleteIcon,'class','bx bxs-x-square');

    DOM.appendChild($deleteUser,$deleteIcon)
    DOM.appendChild($userCard,$deleteUser)
    
    ////////////////////////

    // making user info section 

    const $userInfo = DOM.createElement('div');
    DOM.setAttribute($userInfo,'class','user_info');

    // making avatar section

    const $avatarWrap = DOM.createElement('div');
    DOM.setAttribute($avatarWrap,'class','avatar_wrapper');

    const $avatarImg = DOM.createElement('img');
    DOM.setAttribute($avatarImg,'src',imgUrl)
    DOM.setAttribute($avatarImg,'class','avatar-img')
    DOM.setAttribute($avatarImg,'data-name',id)


    DOM.appendChild($avatarWrap,$avatarImg)
    DOM.appendChild($userInfo,$avatarWrap)

    // making text section 
    const $infoText = DOM.createElement('div');
    DOM.setAttribute($infoText,'class','user-info-wrapper');

    const $nameText = DOM.createElement('p')
    DOM.setAttribute($nameText,'class','user-info')
    $nameText.textContent = `Name::${name}`;

    const $emailText = DOM.createElement('p')
    DOM.setAttribute($emailText,'class','user-info')
    $emailText.textContent = `Email::${email}`;

    const $phoneText = DOM.createElement('p')
    DOM.setAttribute($phoneText,'class','user-info')
    $phoneText.textContent = `Phone::${phone}`;


    DOM.appendChild($infoText,$nameText)
    DOM.appendChild($infoText,$emailText)
    DOM.appendChild($infoText,$phoneText)

    DOM.appendChild($userInfo,$infoText)

    //////////////////
    DOM.appendChild($userCard,$userInfo)

    return $userCard
}



export class NewUsr {
    constructor(){
        const $form = document.querySelector('.new_user_generate');
        $form.addEventListener('submit',event=>{
            event.preventDefault();
            const name = $form.name.value;
            const email = $form.email.value;
            const phone = +$form.phone.value;
            this.saveFrom({name,email,phone})
            $form.reset()
            document.querySelector('.form_new_user').classList.remove('show')

        })
    }

    saveFrom(data){
        const newUsr = {
            ...data
        }
        myApi.post('items/create.php', newUsr)
            .then(data => {
                $wrapper.innerHTML= '';
        })

        setTimeout(()=>{
                myApi.get('items/read.php')
                     .then(data => {
                        data.forEach(user=>{
                        appendUserCard($wrapper,user)
                         })
                    })
        },200)

    }
}

export class DelUsr{
    constructor(){
        $wrapper.addEventListener('click',event=>{
            event.stopPropagation()
            const id = +event.target.parentNode.dataset.id;
            if(id) {
                this.delFrom({ id })
            }
        })
    }
    
    delFrom(data){
        const delItem = {
            ...data
        }
        console.log(delItem);
        myApi.delete('items/delete.php',delItem)
            .then(data=>{
                $wrapper.innerHTML= '';
        });

        setTimeout(()=>{
            myApi.get('items/read.php')
                 .then(data => {
                    data.forEach(user=>{
                    appendUserCard($wrapper,user)
                     })
                })
        },100)
        
    }
}

function createSideUser(user){
    const {id,name,email,phone} = user;

    const $side_card = DOM.createElement('div');
    DOM.setAttribute($side_card,'class','side_card');


    const $avatarWrap = DOM.createElement('div');
    DOM.setAttribute($avatarWrap,'class','avatar_wrapper');

    const $avatarImg = DOM.createElement('img');
    DOM.setAttribute($avatarImg,'src',userImgArr[randomColorIndex])
    DOM.setAttribute($avatarImg,'class','avatar-img-side')
    DOM.setAttribute($avatarImg,'data-name',id)


    DOM.appendChild($avatarWrap,$avatarImg)
    DOM.appendChild($side_card,$avatarWrap)

    ////////

    const $infoText = DOM.createElement('div');
    DOM.setAttribute($infoText,'class','user-info-wrapper-side');

    const $nameText = DOM.createElement('p')
    DOM.setAttribute($nameText,'class','user-info-side')
    $nameText.textContent = `Name::${name}`;

    const $emailText = DOM.createElement('p')
    DOM.setAttribute($emailText,'class','user-info-side')
    $emailText.textContent = `Email::${email}`;

    const $phoneText = DOM.createElement('p')
    DOM.setAttribute($phoneText,'class','user-info-side')
    $phoneText.textContent = `Phone::${phone}`;


    DOM.appendChild($infoText,$nameText)
    DOM.appendChild($infoText,$emailText)
    DOM.appendChild($infoText,$phoneText)

    DOM.appendChild($side_card,$infoText)

    return $side_card
}



export class DetailUsr{
    constructor(){
        $wrapper.addEventListener('click',event=>{
            event.stopPropagation();
            if(event.target.dataset.name){
                const newId = +event.target.dataset.name;

                myApi.get('items/read.php')
                .then(data => {
                    const filteredUsr = data.find(user=>{
                        return user = user.id === newId
                    })
    
                    const $sideBar = document.querySelector('.sidebar')
                    $sideBar.innerHTML = ''
                    appendUserCardSide($sideBar,filteredUsr)
                })


            }else{
                return
            }
            
        })
    }

    
}




export function appendUserCard(parent,user){
    const card = createUserCard(user);
    DOM.appendChild(parent,card)
}


export function appendUserCardSide(parent,user){
    const card = createSideUser(user);
    DOM.appendChild(parent,card)
}

