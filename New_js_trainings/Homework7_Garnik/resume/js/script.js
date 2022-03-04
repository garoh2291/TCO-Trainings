
document.body.setAttribute('style' , 'font-size:12px')
/*--------- New div -----------*/
const mainWrapper = document.createElement('div')
document.body.prepend(mainWrapper)
/*----------- h1 element ----------- */
const h1 = document.createElement('h1');
h1.innerHTML = 'Ռեզյումե';
mainWrapper.appendChild(h1);
h1.style.textAlign = 'center';
/*------------- info tags -------------*/
const nameSur = document.createElement('p');
let nameText = document.createTextNode("Անուն Ազգանուն ։ Գառնիկ Հովսեփյան")
nameSur.appendChild(nameText);
mainWrapper.appendChild(nameSur);

const tel = document.createElement('p')
tel.innerHTML = "Հեռ ։ 077123456"
mainWrapper.appendChild(tel)

const eMail = document.createElement('p')
eMail.innerHTML = 'Էլ․ փոստ ։ test@testmail.com'
mainWrapper.appendChild(eMail)

const myAddress = document.createElement('p')
myAddress.innerHTML = 'Հասցե ։ Ք․ Երևան'
mainWrapper.appendChild(myAddress)
/*------------ image tag -------------*/
const myImg =  document.createElement('img')
myImg.src = 'images/1.jpg'
mainWrapper.appendChild(myImg)
myImg.setAttribute('style', 'margin-top: 10px ; width:100px ; height:100px')

const education = document.createElement('h3')
let eduText = document.createTextNode('Կրթություն')
education.appendChild(eduText)
mainWrapper.appendChild(education)

/*-----------------Education List -------------------*/

const eduList = document.createElement('ol')
mainWrapper.appendChild(eduList)


let eduPlace = ['Միջնակարգ Դպրոց N000' , 'Երևանի Պետական Համալսարան', 'TCO Team Training Center']

for(let i=0 ; i < eduPlace.length ; i++){
    let eduItem = document.createElement('li')
    eduItem.innerHTML = eduPlace[i]
    eduList.appendChild(eduItem)
}

/*---------------- Wordk list -----------------*/

const myWork = document.createElement('h3')
myWork.innerHTML = "Աշխատանք"
mainWrapper.appendChild(myWork)


const workList = document.createElement('ul')
mainWrapper.appendChild(workList)

let workPlace = ['Բրուտ Ատաղծագործ','Ինժիներ','Web full stack developer']


for(let i=0 ; i < workPlace.length ; i++){
    let workItem = document.createElement('li')
    workItem.innerHTML = workPlace[i];
    workList.appendChild(workItem)
}

/*------------- Me in social network ------------*/

const meSoc = document.createElement('h3')
meSoc.innerHTML = 'Ես Սոցիալական Ցանցերում'
mainWrapper.appendChild(meSoc)

const socList = document.createElement('ul')
mainWrapper.appendChild(socList)

let socPlace = [
    '<a href="http://facebook.com">Facebook</a>',
    '<a href="http://instagram.com">Instagram</a>',
    '<a href="http://linkedin.com">Linkedin</a>'
]

for(let i=0 ; i < socPlace.length ; i++){
    let socItem = document.createElement('li')
    socItem.innerHTML = socPlace[i];
    socList.appendChild(socItem)
}

/* -------------- Table with Languages  -------*/

const myLang = document.createElement('h3')
myLang.innerHTML = 'Լեզուներ'
mainWrapper.appendChild(myLang)


const langTab = document.createElement('table')
mainWrapper.appendChild(langTab)


const firstLine = document.createElement('tr')
langTab.appendChild(firstLine)

let langType = [
    'Armenian',
    'Russian',
    'English'
]

for(let i=0 ; i < langType.length ; i++){
    let langItem = document.createElement('td')
    langItem.innerHTML = langType[i];
    firstLine.appendChild(langItem)
}

const secondLine = document.createElement('tr')
langTab.appendChild(secondLine)

let langLevel = [
    'Good',
    'Bad',
    'Bad'
]

for(let i=0 ; i < langLevel.length ; i++){
    let langItem2 = document.createElement('td')
    langItem2.innerHTML = langLevel[i];
    secondLine.appendChild(langItem2)
}


/*------------- some style for document -----------*/


mainWrapper.setAttribute('style', 'width:400px ; height:650px ; border: 1px solid ; margin: 0 auto; background-color: #a1ccdb ; padding:30px')
let headings = document.querySelectorAll('h3')

for(i of headings){
    i.style.textAlign = 'center'
}


langTab.setAttribute('style' , 'border: 1px solid; margin: 0 auto')