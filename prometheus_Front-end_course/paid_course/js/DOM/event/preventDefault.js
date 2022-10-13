const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault() // Заборонити щось, наприклад перезавантажувати сторінку для сабміт чи відкривати силку
    console.log(event)
})