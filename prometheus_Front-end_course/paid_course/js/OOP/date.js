const date = new Date()
console.log(date.getDate())
console.log(date.getFullYear())
console.log(date.getTime())
console.log(new Date('02/05/1989'))
const myBday = new Date('04/05/2006')
const dif = date.getTime() - myBday.getTime()
console.log(dif / 1000 / 60 / 60 / 24) // Щоб отримати кількість