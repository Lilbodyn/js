a = 7

a ++

function testfunction(){
    const x = 5;
    const y = 7;
    console.log(x + y);
}

function hello(){
    testfunction();
    console.log('Hello');
}

function testfunction2(){
    function t3(){
        console.log('t 3 function')
    }
    t3();
    console.log('test')
}
hello();
testfunction();
testfunction2();

function unixTime(){
    let time = Math.floor(new Date().getTime());
    console.log(time);
}

unixTime();

function randomInt(){
    const min=110;
    const max=200;
    let rand = Math.floor(min + Math.random() *(max + 1 - min));
    console.log(rand);
}
randomInt();

function rand(){
    let min=110;
    let max=200;
    let rand = Math.floor(min + Math.random() *(max + 1 - min));
    console.log(rand);
}
rand();

let c = 9;
function count(){
    c++;
    
    console.log(c);
}
count();
count();
count();
count();

document.querySelector('.one').addEventListener('mousemove', blockWidth);
document.querySelector('.one').onclick = blockheight;

let w = 200;

function blockWidth() {
    w++;
    document.querySelector('.one').style.width = w + 'px';
}

function blockheight() {
    w++;
    document.querySelector('.one').style.height = w + 'px';
}