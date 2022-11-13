/* function pow(x, n) {
    let result = x;

    for(let i = 1; i < n; i++){ // повторяє дія n разів
        result = result * x
    }

    return result
} */

function pow(x, n) {
    if(n === 1) {
        return x;
    }

    return x * pow(x, n - 1)
}

console.log(pow(2, 2))
console.log(pow(2, 3))