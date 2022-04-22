const frontImgUrl = "./1024px-User-avatar.svg.png" 
const backImgUrl = "./avatar-png-icon-13.jpeg"


export default class DOM {
    static createElement(tagName) {
        return document.createElement(tagName);
    }
    static querySelector(selector) {
        return document.querySelector(selector);
    }
    static setAttribute(element, attr, value) {
        return element.setAttribute(attr, value);
    }
    static appendChild(parent, child) {
        return parent.appendChild(child);
    }
}

function createUserCard(user) {
    const {id, email, phone, name } = user;

    const $flipCard = DOM.createElement('div');
    DOM.setAttribute($flipCard, 'class','flip-card' );

    const $flipCardInner = DOM.createElement('div');
    DOM.setAttribute($flipCardInner,'class', 'flip-card-inner');

    //// Front space

    const $cardFront = DOM.createElement('div');
    DOM.setAttribute($cardFront,'class','flip-card-front')
    $flipCardInner.appendChild($cardFront);

    // Front image 
    const img = DOM.createElement('img');
    DOM.setAttribute(img,'src',frontImgUrl)
    $cardFront.appendChild(img)

    //// Back space info and img 

    const $cardBack = DOM.createElement('div');
    DOM.setAttribute($cardBack,'class','flip-card-back')
    DOM.setAttribute($cardBack,'data-id',id)

    $flipCardInner.appendChild($cardBack)
    

    const backImg = DOM.createElement('img');
    DOM.setAttribute(backImg,'src',backImgUrl)
    $cardBack.appendChild(backImg)

    
    //infoPart
    const nameElement = DOM.createElement('p');
    nameElement.textContent = `Name::${name}`;
    // DOM.setAttribute(nameElement, 'class', 'user-info');

    const emailElement = DOM.createElement('p');
    emailElement.textContent = `Email::${email}`;
    // DOM.setAttribute(emailElement, 'class', 'user-info');


    const phoneElement = DOM.createElement('p');
    phoneElement.textContent = `Phone::${phone}`;
    // DOM.setAttribute(phoneElement, 'class', 'user-info');

    $cardBack.appendChild(nameElement);
    $cardBack.appendChild(emailElement);
    $cardBack.appendChild(phoneElement);

    const $butDetails = DOM.createElement('button');
    DOM.setAttribute($butDetails,'class','detail-button')
    $butDetails.textContent = 'Details'
    $cardBack.appendChild($butDetails)


    $flipCard.appendChild($flipCardInner);

    return $flipCard
}

export function appendUserCard(parent, user) {
    const card = createUserCard(user);
    DOM.appendChild(parent, card);
}
