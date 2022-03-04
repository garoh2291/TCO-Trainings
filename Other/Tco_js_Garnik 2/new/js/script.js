


$(document).ready(function(){
    
    
    let myApi = $.ajax({
        method: "GET",
        url: 'https://jsonplaceholder.typicode.com/posts',
        success: function(data) {
            
            let myDiv = document.createElement('div')
            document.body.prepend(myDiv)
            myDiv.className = 'bigClass'

            
            
            data.forEach(
           
            x => myDiv.innerHTML += `<div class='smalldiv'><p>${x.id}</p> 
            <p>${x.userId}</p> 
            <p>${x.title }</p> 
            <p>${x.body}</p></div>` ) 
          
            
        
    }
    })
    
    

    
}); 


