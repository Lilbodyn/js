/* const name = 'Bohdan'
const age = 16
function getage() {
    return age
} */

//const output = 'Привет меня зовут ' + name + ' и мой возраст ' + age + ' лет' 
/* const output = `Привет, меня зовут ${name} и мой возраст ${age < 10 ? 'A': 'B'} лет.`
console.log(output) */

/* const output = `
    <div>This is div</div>
    <p>This is p</p>
`
console.log(output) */

/* const name = 'Bohdan'
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(0))
console.log(name.indexOf('h'))
console.log(name.toLowerCase().startsWith('boh'))
console.log(name.startsWith('Boh'))
console.log(name.endsWith('an'))
console.log(name.repeat(3))
const string = '      password dd    '
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight()) */

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Bohdan'
const personName2 = 'Max'
const personAge = 16
const personAge2 = -5

const output = logPerson`имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)

function myCars(d, maz, peu) {
    return `${d[0]}${maz}${d[1]}${peu}${d[2]}`
}

const mazda = 'mazda cx-5'
const peugeot = 'peugeot 508'
const cars = myCars`Первая: ${mazda}, Вторая: ${peugeot}`
console.log(cars)

function myPhones(a, lenovo, apple){
    return `${a[0]}${lenovo}${a[1]}${apple}${a[2]}`
}

const fir = 'lenovo a526'
const last = 'iphone 13 pro'
const iphone = myPhones`Первий: ${fir}, Последний: ${last}`
console.log(iphone)


function myTest(z, voda, cola){
    return `${z[0]}${water}${z[1]}${cola}${z[2]}`
}
const water = 'artezianska'
const cola = 'coca-cola'
const drink = myTest`Вода обичная: ${water}, Сладкая вода: ${cola}`
console.log(drink)


