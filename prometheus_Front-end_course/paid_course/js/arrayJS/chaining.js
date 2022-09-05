const arr = [
    {num: 1 },
    {num: 2 },
    {num: 3 },
    {num: 4 },
];

const coef = 1.5;

const result = arr.map((item) => item.num * coef)
console.log(result)

const sum = result.reduce((acc, cur) => acc + cur, 0)
console.log(sum)