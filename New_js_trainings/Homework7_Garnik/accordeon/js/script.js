let infoDiv = document.querySelectorAll('.info')



for(let i of infoDiv){
    i.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of infoDiv){
            i.classList.remove('active')
        }  
        i.classList.add('active')
    })
   
}






/* --------------------Different background color by time ------------------------------*/


let siteDate = new Date()


console.log(siteDate.getHours());

if(siteDate.getHours() <= 12){
    document.body.style.background = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'
    document.body.style.backgroundSize = '400% 400%'
    document.body.style.animation = 'gradient 15s ease infinite'
}else{
    document.body.style.background = 'linear-gradient(-45deg, #974830, #dda2b9, #a1ccdb, #44635c)'
    document.body.style.backgroundSize = '400% 400%'
    document.body.style.animation = 'gradient 15s ease infinite'
}
    




 
 