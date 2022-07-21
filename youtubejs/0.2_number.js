// number
/* const num = 42 // integer
const float = 42.42 // float
const pow = 5e3 // +0n
console.log(pow)

Number.EPSILON
console.log(Number.EPSILON)
console.log('Math.pow', Math.pow(2, 2) -1)

console.log('Max_Value', Number.MAX_VALUE)
console.log('Min_Value', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('NaN', Number.NaN) // Not A Number
console.log(typeof NaN)
const weird = 2 / undefined
console.log(isNaN(weird))
console.log(isNaN(40))
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(42))

const stringInt = '42'
const stringFloat = '42.42'
console.log(Number.parseInt(stringInt) + 2)
console.log(parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)

console.log(parseFloat(stringFloat) + 2)
console.log(+stringFloat + 2 ) */

/* console.log(0.4 + 0.2) // 0.6000001
//console.log((4 / 10) + (2 / 10)) 0.6000001
console.log((0.4 + 0.2).toFixed(4)) // 0.6000
console.log((0.4 + 0.2).toFixed(1)) // 0.6
console.log(+(0.4 + 0.2).toFixed(1))  */

// BigInt
//console.log(9007199254740991999n - 90071992547409919n)

//console.log(10n - 4) // error
/* console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))
console.log(5n / 2n) // 2n */

// 3 Math
/* console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25))
console.log(Math.pow(5, 2))
console.log(Math.abs(-42))
console.log(Math.max(42, 16, 30, 50))
console.log(Math.min(42, 16, 30, 50))

console.log(Math.floor(4.6))
console.log(Math.ceil(4.9))
console.log(Math.round(4.5))
console.log(Math.round(4.4))
console.log(Math.random()) */

// Example

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 40))