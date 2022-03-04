function newUser(Position , Name , Salary){
    a = {};
    a.Position = Position;
    a.Name = Name;
    a.Salary = Salary;
    return a
}

let ashme = document.querySelector('h1').textContent;

let bigFirm = [
    {Position: 'CEO' , Name : 'Alex' , Salary: '1200$'},
    {Position: 'CTO' , Name : 'Sam' , Salary: '1150$'},
    {Position: 'SEO' , Name : 'Viktoria' , Salary: '1040$'},
    {Position: 'Project Manager' , Name : 'Arthur' , Salary: '980$'},
    {Position: 'Product Manager' , Name : 'Anna' , Salary: '870$'},
    {Position: 'Front-End Developer' , Name : 'Erik' , Salary: '610$'},
    newUser('uas' ,'anasasd na' ,ashme)

]

////start
let info = {}

// info.Salary = document.querySelector('h1').textContent;





console.log(bigFirm);

///// end






let salaryCount = (bigFirm.map(x => parseFloat(x.Salary)))


// console.log(salaryCount);

let salaryPerMonth = salaryCount.reduce((a,b) => a + b)


console.log(`this company spends $ ${salaryPerMonth} on salary every month`);

// let info = {}
// let butclick = document.querySelector('myBut')

//     info.firstName = document.querySelector('h1').textContent;


// allInfo.push(info)










// alert(allInfo)