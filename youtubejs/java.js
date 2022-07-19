/* alt + shift + A */

//alert('Hello')

// 1 Переменные
// camelCase

//const firstName = 'Bohdan'
//const lastName = 'Minin' //string
//let age = 26 // number
//const isProgrammer = true // boolean

// const if = 'mkef' error

// 2 мутирование

//console.log('имя человека: ' + firstName)

//alert('имя человека: ' + firstName)

//const lastName = prompt('Введите фамилию')
//alert(firstName + ' ' + lastName)

// 3 Операторы
//let currentYear = 2022
//const birthYear = 2006

//const age = currentYear - birthYear
//console.log(age)

//const a = 10
//const b = 5

//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(currentYear++)
//console.log(currentYear)

//4 Типы данных

/* const isProgrammer = true
const name = 'Bohdan'
const age = 26
console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age) */

// Приоритет операторов

/* const fullAge = 16
const birthYear = 2006
const currentYear = 2022

const isFullAge = (currentYear - birthYear) >= fullAge
console.log(isFullAge) */

// 6 Условные операторы

/* const courseStatus = 'Gleb'
if (courseStatus === 'ready') {
    console.log('Курс уже готов и его можно проходить')
} else if (courseStatus === 'pending') {
    console.log('Курс пока находиться в стадии розроботки')
} else {
    console.log('Курс не получился')
} */

//const isReady = false
/* if (isReady){
    console.log('Все готово');
} else {
    console.log('Все не готово')
} */
// Тернарное выражение
//isReady ? console.log('Все готово') : console.log('Все не готово')

/* const num1 = 42 //number
const num2 = '42' //string

console.log( num1 == num2) //true
console.log( num1 === num2) */

// 7 Булевая логика

false && true // false
true && true // true
false || true // true
false || false // false
!true // false
!!true // true

// 8 Функции
/* const myAge = calculateAge(2006)
console.log(myAge) */

/*  function calculateAge(year){
    return 2022 - year
}

function logInfoAbout(name, year){
    const age = calculateAge(year)

    if (age > 0){
        console.log('Человек по именни ' + name + ' сейчас имеет возраст ' + age + ' лет')
    } else {
        console.log('Вообщето это невозможно')
    }
    
}
logInfoAbout('Богдан', 2006) 


function calculatePrice(grn) {
    return 27500 * grn
}

function logCourseGrn(grn){
    const price = calculatePrice(grn)

    if(price < 1200000){
        console.log('Цена Ленд Ровера Дискавери Спорт ' + price)
    } else{
        console.log('Дорого')
    }
    
}
logCourseGrn(37.5)  */

// 9 Массивы

const cars = ['Мазда', 'Мерседес', 'Форд']
//const cars = new Array('Мазда', 'Мерседес', 'Форд')

cars[0] = 'Porsche'
cars[3] = 'Mazda'
console.log(cars)

// 10 Циклы