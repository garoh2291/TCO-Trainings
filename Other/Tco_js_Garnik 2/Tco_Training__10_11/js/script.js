$(document).ready(function(){
    let myApi = $.ajax({
        method: "GET",
        url: 'https://jsonplaceholder.typicode.com/posts',
        succes: function(data) {
            data.forEach(el => console.log(el.name))
        }
    })
}); 