const store = document.getElementById('store')
const retrieve = document.getElementById('retrieve')

store.addEventListener('click', () => {
    const userId = 'user123'
    const user = {
        name: 'Svitlana',
        surname: 'Sikora'
    }
    document.cookie = `uid=${userId}; max-age=2` // добавити кукі, max-age максимальний термін зберігання в секндах
    document.cookie = `user=${JSON.stringify(user)}` // Передаєм обєкт user
})

retrieve.addEventListener('click', () => { 
    console.log(document.cookie) // виводить дані кукі
    const user = document.cookie.split(';').map(i => i.trim())[1].split('=')[1] // Метод Split розділить стрічку а окремі сутності, trim забре зайві пробіли
    console.log(user)
})
