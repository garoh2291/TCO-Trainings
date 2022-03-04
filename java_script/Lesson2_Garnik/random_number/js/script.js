let bigRand = Math.round(Math.random() * 100) + 100

while(bigRand > 50){
    bigRand-=5;
    console.log(bigRand);
}

if(bigRand <=50){
    alert('Stop')
}

