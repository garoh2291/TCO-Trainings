const $allBtn = document.querySelectorAll('.btn');

$allBtn.forEach(btn => {
    btn.onmousedown = function(){
        btn.classList.add('pressed')
    }
    btn.onmouseup = function(){
        btn.classList.remove('pressed')
    }
});

let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0','1', '2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/','%'];

const $screen = document.querySelector('.screen-text');

function clearFunc(){
    a = '';
    b = '';
    sign = '';
    finish = false;
    $screen.textContent = '0'
}

document.querySelector('.erase').onclick= clearFunc;

document.querySelector('.buttons').onclick = (event)=>{
    if(!event.target.classList.contains('btn-text')) return;
    if(event.target.classList.contains('erase')) return;
    
    const key = event.target.textContent.trim();

    if(digit.includes(key)){
        if(b === '' && sign === ''){
            a += key
            $screen.textContent = a
        }else if(a!== "" && b!== '' && finish){
            b = key;
            finish = false;
            $screen.textContent = b
        }else{
            b += key
            $screen.textContent = b
        }
        return
    }

    if(action.includes(key)){
        sign = key;
        $screen.textContent = sign;
    }

    if(key === '='){
        if(b === '') b = a;
        switch(sign){
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = (+a) - (+b);
                break;
            case 'X':
                a = (+a) * (+b);
                break;
            case '/':
                if(b === '0'){
                    $screen.textContent = 'Error'
                    a = '';
                    b = '';
                    sign = '';
                    return
                }
                a = (+a) / (+b);
                break;
        }
        finish = true;
        $screen.textContent = a
    }
}


