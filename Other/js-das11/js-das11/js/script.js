// AJAX - Asynchronous Javascript and XML
// CRUD -create read update delete
// API - application programming interface
// xhr-XMLHttpRequest sovorakan zapros ejy tarmacnelov //hnutyun


// console.log(1);
// console.log(2);

// setTimeout(function(){
//     console.log(3);
// }, 3000)
// console.log(4);


///////////////////// AJAX ///////////////////////

// let myApi = "https://jsonplaceholder.typicode.com/users";
// console.log(myApi);


// ajax avtomat parse e anum 
let myApi = $.ajax({
    method: "GET",
    url: 'https://jsonplaceholder.typicode.com/users',

    success: function(data) {
      data.forEach(el => console.log(el.name))
    }
})

/////ERRORS//////
// Информационные 100 - 199
// Успешные 200 - 299
// Перенаправления 300 - 399
// Клиентские ошибки 400 - 499
// Серверные ошибки 500 - 599

async function ftFunc(){
    let ft = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(ft)
}
ftFunc();