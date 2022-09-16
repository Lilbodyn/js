const person = {
    name: 'Svitlana',
    age: 33
}

console.log(person)

const { name: personName, age } = person;
console.log(personName);
console.log(age)

 const printName = ({ name }) => {
    console.log('Name: ' , person.name)

printName(person);
}
/* const arr = [ 'one', 'two', 'three']
const [a, b, c] = arr;
 console.log(a)} */