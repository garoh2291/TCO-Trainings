function Users(selector,userlist){
    this.$el = document.querySelector(selector);
    this.items = userlist.items;

    for (let i = 0; i < this.items.length; i++) {
        const userInfo = document.createElement('tr');
        this.$el.appendChild(userInfo);

        for (let x of Object.values(this.items[i])) {
            let detail = document.createElement('td');
            let detailText = document.createTextNode(x);
            detail.appendChild(detailText);
            userInfo.appendChild(detail);
        }
    }

    this.saveFrom =  function(data){ 
        const newObj = {
            ...data
        };
        this.items.push(newObj);
        localStorage.setItem('mylist',JSON.stringify(this.items));
        const newInfo = document.createElement('tr');
        this.$el.appendChild(newInfo);
        for (let item of Object.values(this.items[this.items.length-1])) {
            let detail = document.createElement('td');
            let detailText = document.createTextNode(item);
            detail.appendChild(detailText);
            newInfo.appendChild(detail);
        }        
        form.email.value = '';
        form.name.value = '';
        form.surname.value = '';
        form.age.value = '';
    }
}





const myUsers =function(){
    let some = JSON.parse(localStorage.getItem('mylist'))
    if(some === null){
        return [
            {
                email: 'info@info.com',
                fName: 'Alan',
                lName: 'Rickman',
                age: 45,
            },
            {
                email: 'test@info.com',
                fName: 'Stew',
                lName: 'Hardley',
                age: 32,
            },
            {
                email: 'my@info.com',
                fName: 'Conan',
                lName: 'Mcgregor',
                age: 24,
            },
          ]
    }else{
        return some
    }
    
}




const form = document.querySelector('form');
const myList = new Users('#my-table', {
    items: myUsers()
  });



form.addEventListener('submit',event => {
    event.preventDefault();
    let email = form.email.value;
    let name = form.name.value;
    let surname = form.surname.value;
    let age = +form.age.value;
    myList.saveFrom({email,name,surname,age});
    
})