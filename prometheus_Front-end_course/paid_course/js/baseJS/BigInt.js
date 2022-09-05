console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(BigInt(123))
console.log(BigInt(123) === 123)
console.log(BigInt(123) === 123n)

console.log(typeof 123n)
console.log(typeof 123)
console.log(BigInt(123) === 123)//false
console.log(BigInt(123) === 123)//true
