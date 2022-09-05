/* const students = [
    {id: 1, name: 'James', mark: 98},
    {id: 2, mame: 'Jack', mark: 23},
    {id: 3, name: 'Ian', mark: 45},
    {id: 4, name: 'Wick', mark: 75},
]

const callback = (function(a, b){
    return b.mark - a.mark;
})

console.log(students.sort(callback)) */

const callback = function (value) {
    console.log('The sum of number is ', value )
}

const sumUp = function (callback, a, b) {
    const sum = a + b;
    callback(sum);
}

sumUp(callback, 5, 5) 