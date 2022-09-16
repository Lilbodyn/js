function sayHi(name) {
    console.log(`Hi, ${name}!`);
}
sayHi('Svitlana')

/* function sum(param1, param2, param3) {
    return param1+param2+param3;
}
sum(1, 2, 3) */

function sum(...rest) { //Якщо невідомо скільки значень
    console.log(rest)
}
sum(1, 2, 3)

const person = {
    name: 'Sitlana',
    age: 33
}

function printName({ name }) {
    console.log(name);
}
printName(person)

function sum(param1, param2, param3) {
    console.log(arguments);
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    Array.from(arguments).map((item) => item)
}
sum(1, 2, 3)

function higherOrderFunction(func){
    func()
    func()
}

higherOrderFunction(callback)

const obj = {
    value: 'some value',
    doSomething: function(){
        console.log(1)
    },
    doSomething2: () => {
        console.log(2)
    },
    doSomething3() {
        console.log(3)
    }
}

obj.doSomething()
obj.doSomething2()
obj.doSomething3()

