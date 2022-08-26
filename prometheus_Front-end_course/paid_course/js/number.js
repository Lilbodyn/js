let number = 123;
let anotherNumber = 123.456;

const a = new Number(123);
console.log(typeof a)
a.message = 'Hello from a!'; //Влстивіть
console.log(a.message);

const b = Number(123);
console.log(typeof b)
b.message = 'Hello from b!';
console.log(b.message)

const num = Number.parseFloat('123.456hhh')
const num2 = parseFloat('123.456hhh')
/* function Number () {
    return{
        value: '...',
        method: () => {}
    }
}

class Number {

} */