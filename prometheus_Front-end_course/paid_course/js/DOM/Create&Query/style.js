document.querySelector('h1').style.fontSize = '100px'

const list = document.querySelector('ol')
const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    if (list.className === 'red-bg visible') {
        list.className = 'red-bg invisible'
    } else {
        list.className = 'red-bg visible'
    }
})
===
btn.addEventListener('click', () => {
    list.classList.toggle('invisible')
    list.classList.toggle('visibe')
})

list.classList.contains('visible') // Чи містить
list.classList.add('') // Додає
list.classList.remove('') // Видаляє
list.classList.toggle('') // Додає чи видаляє залежачи від наявності