// 1 Функции
// Function declaration
/* function greet(name) {
    console.log('Привет - ', name)
} */
// Function expression
/* const greet2 = function greet2(name) {
    console.log('Привет2 - ', name)
}
 */
//greet('Bohdan')
//greet2('Bohdan')

//console.log(typeof greet)
//console.dir(greet)

// 2 Анонимные функции

/* let counter = 0
const interval = setInterval(function() {
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000) */

// 3 Стрелочные функции

function greet(name) {
    console.log('Привет - ', name)
} 

const arrow = (name) => {
    console.log('Привет - ', name)
}
const arrow2 = name => console.log('Привет -', name)
arrow2('Bohdan')

const pow2 = num =>  num ** 2
console.log(pow2(5))

// 4 Параметры по умолчанию

/* const sum = (a, b=a*2) => a + b

console.log(sum(41)) */

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}
const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(res)

// 5 Замыкание
function createMember(name) {
    return function(lastName){
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Bohdan')
console.log(logWithLastName('Omelchenko'))
console.log(logWithLastName('Yashchuk'))

