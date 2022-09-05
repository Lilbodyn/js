/* const str = "My srting"
const str2 = 'My string'

const str3 = `My string ${str}`

const str4 = new String('string')

console.log(typeof str)
console.log(typeof str4)

const animal = 'Cat'
const tempAnimal = new String(animal)
console.log(animal.toUpperCase())
console.log(animal) */

const animal = 'Cat'

console.log(animal[0])
console.log(animal[3])

console.log(animal.length)

const message = 'Hi, How r u?'
console.log(message.toUpperCase());
console.log(message.trim()/* Забирає пробіли в початку і в кінці */.toUpperCase());
console.log(message.indexOf('Hi'))
console.log(message.indexOf('u')) //Номер
console.log(message.indexOf('x'))

console.log(message.slice(4, 11)) //Показує проміжок від до
console.log(message.replace('Hi', 'Hello')) // Замінює

console.log('hahaha'.replace('ha', 'hi')) // Замінює лише перше
console.log('hahaha'.replaceAll('ha', 'hi')) // Замінює все


