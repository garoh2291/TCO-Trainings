class Employer{
    fName = '';
    lName = '';
    age = 0;
    salary = '';

    constructor(fn,ln,ag,sal){
        this.fName = fn;
        this.lName = ln;
        this.age = ag;
        this.salary = sal;
    }

    info(){
        console.log(`Employer ${this.fName+' '+this.lName}`);
    }
}



let emp1 = new Employer('Garnik','Hovsepyan', 30 ,'100$');
let emp2 = new Employer('Aram','Hovsepyan', 30 ,'200$');
let emp3 = new Employer('Narek','Hovsepyan', 30 ,'150$');
let emp4 = new Employer('Ashot','Hovsepyan', 30 ,'300$');



class Production{
    name = '';
    employers = [];


    constructor(nm,employers){
        this.name = nm;
        
        this.employers = employers;
        
    }

    sumarryCount(){
        let s = 0;
        this.employers.forEach(employer=> s += parseFloat(employer.salary))
        return `${s}$`
    }

    addEmployer(newPerson){
        this.employers.push(newPerson)
    }

    deleteEmployer(name){
        this.employers.filter(x => x.fName != name )
    }

}





let myCompany= new Production('myCompany',[emp1,emp2,emp3])

console.log(myCompany);

console.log(myCompany.sumarryCount()); 

myCompany.addEmployer(emp4);
console.log(myCompany);
