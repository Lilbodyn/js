const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)
})

const section = document.querySelector('section')
const span = document.querySelector('span')
const btn = document.querySelector('.btn-danger')

section.addEventListener('click', () => {
    console.log('I am Section!')
}, /* true */) // True Фаза занурення викличе першим із трьох ще тому що він бтьківскьий 

span.addEventListener('click', () => {
    console.log('I am span')
}, /* false */) // Викличе останім

btn.addEventListener('click', (event) => {
    event.stopImmediatePropagation() // Зашкодить запуску іншого обробника I am button again
    event.stopPropagation(); // Зовсім не буде викликатись
    event.preventDefault(); // Тільки один елемент
    console.log('I am button')
})
btn.addEventListener('click', (event) => {
    event.stopPropagation(); // Зовсім не буде викликатись
    event.preventDefault(); // Тільки один елемент
    console.log('I am button again')
})