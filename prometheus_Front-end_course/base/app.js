/* let myMessage;
myMessage = 'Hello User';
console.log(myMessage)
myMessage = 'Bye User';
console.log(myMessage) */

/* let number = 123;
let anothernumber = 123.55;
console.log(2 * '5') */

/* let str = 'myString';
str = 'My string'
str = `My string`

let name = 'Bohdan'

console.log(`Hello, ${name}`)

let message = 'hello'
message = 123456 */

/* let checked = true;
cheked = false;

let age = null */

/* let x;
console.log(x); // undefind */

/* let id1 = Symbol('id')
let id2 = Symbol('id')

console.log(id1 == id2)

let user = {
    name: 'Jack',
    [id1]: 1,
    [id2]: 2,
}; */

/* let user = {
    name: 'Jack',
    age: 30,
    isAuth: true,
    jobs: {
        first: 'Makler',
        second: 'Broker'
    }
}

let userName = 'Jack'
let userAge = 30
let userAuth = true
console.log(user.name)
console.log(userName)
console.log(user['name']) */

/* let arr  = ['one', 'two', 'three'];
let anotherArr = ['one', 2, 3, true, [5, 6]]
//console.log(arr[0])
//arr[1] = 'ten'
//console.log(arr[1])
//console.log(arr.length) // довжина масиву 
//let newLen = arr.push('four', 'five') // додає елементи в кінець
//let deletedE1 = arr.pop()// видаляє 1 елемент в кінці
//  console.log(newLen)
//let newLen = arr.unshift('zero', 'four')//додає елементи в початок
let deletedVa1=  arr.shift()// видаляє 1 елемент на початку
console.log(deletedVa1)
console.log(arr) */

/* let arr = [1, 2, 3, 4, 5]
console.log(arr)

 let str = arr.join() // перетворює всі елементи масиву в стрічку

console.log(str)

let str1 = arr.join('-1a-')// Символи між елементами в стрічці
console.log(str1) 
arr.reverse() В зворотньому порядку
console.log(arr) */

/*let arr = [1,15, 6,78, 2, 3, 4, 5]
console.log(arr)
let lit = ['a', 'b', 'd', 'c']
lit.sort() // Сортує елементи від більшого до меньшого та алфавіт
console.log(lit) */

/* arr.sort((a, b) => {
    return a -b
}) */ // Послідовність чисел вірна

/* let arr = ['Bannana', 'Orange', 'Apple', 'Mango']
console.log(arr)

let result = arr.slice(0, 2) // Показує лише два елементи починаючи з нульвого індексу

console.log(result) */

//arr.splice(2, 0, 'Lemon', 'Kiwi', 'Obrecos') //Виконує вставку або видалення елементів з масиву. 
                                            //Такий запис говорить про те що починаючи з другого індексу масиву потрібно додати три елементи, 
                                            //які ми йому передали, другим параметром передається кількість елементів, які з масиву потрібно видалити

//console.log(arr)
/* arr.splice(2, 1)// такий запис означає видалити один елемент починаючи з другої позиції
console.log(arr) */
/* 
let a = '5'
let b = 5

//console.log(a = b) // Означає присвоєння
console.log(a == b) // Перевіряє значення на рівність // true
let c = '5'
let d = 5
console.log(c === d) // Перевіряє значення та типи на рівність // false

let f = 6
let g = 5
console.log(f != g) // f не рівно g // true */

/* && - and
|| - or */
/* console.log( true && true) // true
console.log( true && false) // false
console.log(false && false) // false

console.log(1 < 2 && 2 < 3 && 3 < 4) */ // Читає з ліво на право, читає поки не зустріне false.
                                    //Якщо зустрінне значення false, то виведе false, якщо не зустрінн, то виведе true
//|| повністю протилежне значення &&
/* console.log( true || true) // true
console.log( true || false) // true
console.log(false || false) // true */
//

/* let hour = 11

if (hour < 10 || 18 < hour) {
    console.log('The office is closed')
} else {
    console.log('The office is open')
} */

// let result = prompt('What is your name?')

//alert(result)

/* let result2 = confirm('Are u adult?') // ОК и отмена

alert('Are u adult ' + result2) */  


/* let year = +prompt('When JS first appeared?')

if(year == 1995){
    alert('U r right') 
} else if (1990 < year && year < 2000) { // Значення між 1990 і 2000 роками
    alert('U were close')
} 
else {
    alert('U r stupid')
} */

//let age = +prompt('How old are u?')
//alert('U are '+ age)

//let prefix

/* if (age === 1) {
    prefix = 'year'
} else {
    prefix = 'years'
} */

/* prefix = age === 1 ? 'year' : 'years' // ? це if, : це else

alert(`You are ${age} ${prefix} old`) */

//let value = +prompt('2 + 2 = ')

/* if (value === 3) {
    alert('More...')
} else if(value === 4) {
    alert('Great!')
} else if (value === 5) {
    alert('Less...')
} else {
    alert('I dont know this value...')
} */

/* switch(value) {
    case 3:
    alert('More...')
        break
    case 4:
    alert('Great!')
        break
    case 5:
    alert('Less...')
        break
    default: // Якщо нічіого не виконалось
    alert('I dont know this value...')
} */


/* let i = 0

while(i < 3) {
    console.log(i)
    i++
}
 */

/* for (begining; condition; step) {

} */

/* for (let a = 0; a < 3; a++) {
    console.log(a)
}

let a = 0
for (; a < 3; a++) {
    console.log(a)
} */

/*  while (true) {
    let value =  prompt('Enter a number')

    if (value === null){
        break;
    } 
    console.log(value);
}  */

/* for (let i = 0; i < 4; i++) {
    if(i === 2) {
        continue;
    }
    console.log(i);
} */

/* let fruits = ['Banana', 'Orange', 'Apple', 'Mango']

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
} */


/* let person = {
    firstName: 'Jack',
    lastName: 'Smith',
    age: 30
}

for (let key in person) { // Виводе всі значення for (let key in ())
    console.log(person[key])
} */

/* let start = 100
let result = []
while (result.length < 101){
    result.push(start)
    start--
}
console.log(result) */

/* function name(params, separated, by, comas){

}
name(params, separated, by, comas) */

/* function count () {
    let num1 = 1
    let num2 = 2
    let num3 = 3

    let result = num1 + num2 + num3
    console.log(result)
}
count() */

/* function count (num1, num2, num3) {
    let result = num1 + num2 + num3
    console.log(result)
}
count(4, 3, 3)  */

/* function count (num1=1, num2=2, num3=3) {
    let result = num1 + num2 + num3
    console.log(result)
}
count(4) //9 */

/* let count = function(num1=1, num2=2, num3=3) {
    let result = num1 + num2 + num3
    console.log(result)
}
count(4) */

/* (function(num1=1, num2=2, num3=3) {
    let result = num1 + num2 + num3
    console.log(result)
})(); */

/* (function count(num1=1, num2=2, num3=3) {
    let result = num1 + num2 + num3
    count();
    console.log(result)
})(); */

// return - завершує виконання функції і повертає її результат

/* let sum = function(a, b){
    if(!a || !b){// '!a' це значить не отримала a
        return
    }   
    let c = a + b;
};
console.log(sum(1,2)) */

/* let sum = (a, b) => a + b;
console.log(sum(1, 2))

let sum2 = (a) => a*2;
console.log(sum2(2)) */

//( () => console.log('Hello WORLD'))();

/* let f = new Function('x', 'y', 'return x + y');
console.log(f(1, 2)) */

/* function showMessage() {
    let message = 'Hello user'
    console.log(message);
}

showMessage(); */

/* function count() {
    for ( let i=0; i < 3; i++){
        let j = i * 2;
        console.log(j)
    }
    console.log(j) // Не виведе
}
count(); */

/* function count() {
    let i;
    let j;
    for (i=0; i < 3; i++){
        j = i * 2;
        console.log(j)
    }
    console.log(j) // Виведе
}
count();
 */
/* function count() {
    for (var i=0; i < 3; i++){
        var j = i * 2;
        console.log(j)
    }
    console.log(j) // Виведе
}
count(); */

//let name = 'Petter' // Глобальна зміна
/* function showMessage() {
    let message = 'Hello' + name
    console.log(message);
}
showMessage()
console.log(name) */

/* function showMessage() {
    let name = 'Ivan' // Локальна зміна
    let message = 'Hello ' + name
    console.log(message);
}
showMessage()
console.log(name) */

/* function isEven(number) {
    if (number % 2 == 0) {
      return;
    } else {
        returnж
    }
  }
 */
/*   let senseOfLife = 42;

function showVariable (otherSenseOfLife) {

let senseOfLife = otherSenseOfLife

    return senseOfLife;
}

var ul = document.getElementById('test');

for (var i = 0; i < 3; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
}; */


function count (num1, num2, mark) {
      switch(mark) {
          case "+":
              return num1 + num2;
              break;
          case "-":
              return num1 - num2;
              break;
          case "*":
              return num1 * num2;
              break;
          case "/":
              return num1 / num2;
              break;
          default:
              return "Щось не так...";
      }
    }