const arr = [1, 2, 3, 4];
/* let result = 0; */

/* arr.forEach((item) => {
    result = result + item
}) */

const result = arr.reduce((prevValue, currentValue) => prevValue + currentValue, 0)

console.log(result)