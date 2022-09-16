function getSum(a, b) {
    const result = a + b;
    return result;
}

getSum(1, 2)
getSum(2, 3)

printMessage();

function printMessage(){
    console.log('Function Declaration')
}

function printMessage1(){
    console.log('Function Expression')
}

(function(){
    console.log('Immediately Invoked Function') //Само визивається
})()

const printMessage2 = () => {
    console.log('Arrow function')
}

const add = a => {
    const result = a + 10
    return result;
}

console.log(add(2))

const add2 = a => a + 10
console.log(add2(2))

const sum3 = new Function('a', 'b', 'return a + b')
console.log(sum3(2, 3))

function example(){
    console.log()
}

console.log(typeof example)