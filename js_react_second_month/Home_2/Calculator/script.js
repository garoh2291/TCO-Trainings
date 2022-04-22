class Calclulator {
    constructor() {
        this.start();
    }

    static defaultValues = {
        a: '',
        b: '',
        sign: '',
        screen: ''
    }
    static signs = ['-', '+', '/', '*']

    start() {
        this.a = Calclulator.defaultValues.a;
        this.b = Calclulator.defaultValues.b;
        this.sign = Calclulator.defaultValues.sign;
        this.screen = '0';
    }


    calc(sign) {
        switch (sign) {
            case "+": return this.a + this.b;
            case "-": return this.a - this.b;
            case "/": return this.a / this.b;
            case "*": return this.a * this.b;
        }
    }

    clear() {
        this.start();
    }

    get _a() {
        return this.a;
    }
    set _a(value) {
        if (!Number(value))
            throw new TypeError("A must be a number");

        return this.a = value;
    }

    get _b() {
        return this.b;
    }
    set _b(value) {
        if (!Number(value))
            throw new TypeError("B must be a number");

        return this.b = value;
    }
    get _sign() {
        return this.sign;
    }
    set _sign(value) {
        if (!Calclulator.signs.includes(value))
            throw new TypeError("Sign must be on of this ('-', '+', '/', '*') simbols");

        return this.b = value;
    }

}

class DOM {
    constructor(element) {
        this.element = element;
    }
    static elementTypes = ['div', 'span', 'p']
    static createElement(type) {
        if (!DOM.elementTypes.includes(type))
            throw new TypeError(`type must be one of this type::${DOM.elementTypes.join(' ')}`);

        return document.createElement(type);
    }
    static getElement(selector) {
        return document.querySelector(selector);
    }

    setElementValue(value) {
        const oldValue = this.element.value;

        if (
            isNaN(oldValue[oldValue.length - 1]) &&
            isNaN(value)
        ) {
            this.element.value = this.element.value.slice(0, oldValue.length - 1)
        }

        this.element.value += value;
    }

    clearElementValue() {
        this.element.value = "";
    }

}





//Calculator
//Createing a new object,which has many methods working with DOM
const $resultElement = DOM.getElement('#result');
const resultObject = new DOM($resultElement);

const calcObject = new Calclulator();


//Event handlers
const calcClickHandler = (e) => {
    // const innerValue = target.value
    // console.log("🚀 ~ innerValue", innerValue)

    const { target } = e;
    if (!target.classList.contains('button'))
        return;

    const innerValue = target.value

    resultObject.setElementValue(innerValue);

}


const $calculator = document.querySelector('.calculator');
$calculator.addEventListener('click', calcClickHandler);


