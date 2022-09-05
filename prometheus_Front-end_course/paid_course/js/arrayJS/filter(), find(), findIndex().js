const arr = [1, 2, 3, 4]
const result = arr.filter((item) => { //Повератє всі
    return item > 2
})

console.log(result)

const arr1 = [1, 2, 3, 4]
const result1 = arr1.find((item) => { //Повератє пперше попевше
    return item > 2
})

console.log(result1)

const arr2 = [1, 2, 3, 4]
const result2 = arr2.findIndex((item) => {
    return item > 2
})

console.log(result2)