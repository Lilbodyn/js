const list = document.querySelector('ul')
const input = document.querySelector('input')


list.addEventListener('mouseenter', (e) => { // Коли перетинаєш межі елементу
    console.log(e)
})


input.addEventListener('click', () => { 
    console.log('click')
})
input.addEventListener('focus', () => { // Коли натискаєш на поле вводу
    console.log('focus')
})
input.addEventListener('keyup', () => { // Коли відпускаєш клавішу
    console.log('keyup')
})
input.addEventListener('keydown', () => { // Коли натискаєш на клавішу
    console.log('keydown')
})
input.addEventListener('keypress', () => { // Коли клавіша натиснута
    console.log('keypress')
})