/* const car = {
    make: 'Audi',
    model: 'A7',
    year: 2022,
    color: ['Silver', 'black', 'red'],
    mileage: 0,
    engineSize: 3.0,
    doSomething: () => {
        alert('Hello from do something')
    }
}

console.log(car.model)
console.log(car.color[1])
car.doSomething()

car.isNew = true
car.colors = []

delete car.year
console.log(car )

delete car.info;

console.log(car?.info?.colors);

car.doSomething(); */

let person = {
    name: {
        firstName: 'Svitlana',
        lastName: 'Sirora'
    },
    hobbies: ['cooking', 'cooding'],    
    age: 33
}
let anotherPEerson = {
    name: {
        firstName: person.name.firstName,
        lastName: person.name.lastName
    },
    hobbies: ['cooking', 'codding']
};

let anotherPerson = Object.assign({}, person)

/* let anotherPerson = {
    ...person,
    name: {
        ...person.name
    },
    hobbies: [
        ...person.hobbies
    ]
} */

person.age = 100;

console.log('person', person)
console.log('anotherPerson', anotherPerson)

