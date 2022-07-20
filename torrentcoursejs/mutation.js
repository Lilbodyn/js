const a = 10

let b = 20
b = 30

//console.log(a)
//console.log(b)

const person = {
    name: 'Bobe',
    age: 21
}

//person.age = 22
//person.isAdult = true

//const person2 = person
//person2.age = 26
//person2.isAdult = true

//const person2 = {...person}
const person2 = JSON.parse(JSON.stringify(person))
person2.name = 'Alice'

//const person2 = Object.assign({}, person)
//person2.age = 26

console.log(person.name)
console.log(person2.name)
