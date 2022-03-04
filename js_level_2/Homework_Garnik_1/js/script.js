let s = 0;

function User(fName,lName,bDay,salary){
    this.fName = fName;
    this.lName = lName;
    this.bDay = bDay;
    this.salary = salary; 
    this.info= function(){
        console.log(this.fName,this.lName,this.bDay,this.salary);
    }
};


let adam = new User('Adam','Levine',28,'800$');
let George = new User('Jamie','Vardy',32 ,'600$');
let Christopher = new User('Christopher', 'Nolan' , 50, '320$');
let Ronaldo = new User('Christiano', 'Ronaldo',34 , '1200$');



let Production = {
    name: 'My Company',
    Employers: [adam,George,Christopher],
    sumSalary: function(){  
        this.Employers.forEach(employer=> s += parseFloat(employer.salary))
        return `${s}$`
    },
    addEmployer: function(newPerson){
        s = 0
        this.Employers.push(newPerson)
    },
    deleteEmployer: function(index){
        s = 0
        this.Employers.splice(index,1)
    },
    updateEmployer: function(index,...args){
        s=0
        this.Employers[index].fName = args[0];
        this.Employers[index].lName = args[1];
        this.Employers[index].bDay = args[2];
        this.Employers[index].salary = args[3];
    }
};



