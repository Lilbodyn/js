// pure function чиста функція не змінюється незалежно від змін зовні

/* function add(x, y) {
    return x + y
}

console.log(add(2, 2)) */

// impure function нечиста функція, а ця залежить
let x = 2
function add(y) {
    x += y
    return x;
}

console.log(add(2))
console.log(add(2))

function add (x) {
    return x + Math.floor(Math.random() * 11)
}

console.log(add(5))

const names = ['Svitlana', 'Olena'];

function printNames(arr) {
	const arr2 = [...arr]; // копія щоб його змінювати
	arr.push('New Name!');
	console.log(arr);
}
printNames(names);
printNames(names);
printNames(names);
console.log(names);
