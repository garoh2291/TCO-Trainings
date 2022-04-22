const $allBtn = document.querySelectorAll('.btn');

$allBtn.forEach(btn => {
    btn.onmousedown = function(){
        btn.classList.add('pressed')
    }
    btn.onmouseup = function(){
        btn.classList.remove('pressed')
    }
});



// class Calculator {
//     constructor() {
//         this.el = document.querySelector('.screen-text');
//         this.start()
//     }

    // static defaultValues = {
    //     a: '',
    //     b: '',
    //     sign: '',
    //     finish: false,
    //     screen: '0',
    // }

    // start(){
    //     this.a = Calculator.defaultValues.a;
    //     this.b = Calculator.defaultValues.b;
    //     this.sign = Calculator.defaultValues.sign;
    //     this.finish = Calculator.defaultValues.finish;
    //     this.el.textContent = Calculator.defaultValues.screen
    // }

    

//     static digit = ['0','1', '2','3','4','5','6','7','8','9','.'];

//     static action = ['-','+','X','/','%'];
// }


// const myCalc = new Calculator()

// document.querySelector('.erase').onclick= myCalc.start()

class Calc {
    constructor(selector){
        this.$el = document.querySelector(selector);
        this.$el.querySelector(".screen-text").textContent = "hello";

        this.$el.addEventListener('click', event=> {
            const {target} = event
            if(target.classList.contains('erase')){
                this.start()
            }
        })
        this.$el.querySelector('.buttons').onclick = (event) => {
            const {target} = event;
            if((!event.target.classList.contains('btn-text'))||
            (event.target.classList.contains('erase'))) return;

            const key = target.textContent.trim()
            if(Calc.digit.includes(key)){
                if((this.$el.querySelector(".screen-text").textContent === '0' && key === '0') ||
                (this.$el.querySelector(".screen-text").textContent.includes(".") && key ==='.') )return;
            }
        }

    }

    static defaultValues = {
        a: '',
        b: '',
        sign: '',
        finish: false,
        screen: '0',
    }

    start(){
        this.a = Calc.defaultValues.a;
        this.b = Calc.defaultValues.b;
        this.sign = Calc.defaultValues.sign;
        this.finish = Calc.defaultValues.finish;
        this.$el.querySelector(".screen-text").textContent = Calc.defaultValues.screen
    }


    calculate(){

    }
    static digit = ['0','1', '2','3','4','5','6','7','8','9','.'];

    static action = ['-','+','X','/','%'];
}


const myCalc = new Calc('.wrapper')


