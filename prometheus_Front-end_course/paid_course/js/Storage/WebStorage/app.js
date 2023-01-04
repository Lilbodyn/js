const userId = 'user123'
const user = {
    name: 'Svitlana',
    surname: 'Sikora',
    hobbies: ['Cooding', 'Reading']
}

const store = document.getElementById('store')
const retrieve = document.getElementById('retrieve')

store.addEventListener('click', () => {
    localStorage.setItem('uid', userId) // добавити
    localStorage.setItem('user', JSON.stringify(user)) // Щоб перетворився в текст
})

retrieve.addEventListener('click', () => { 
    const res = localStorage.getItem('uid') //отримати
    const user = JSON.parse(localStorage.getItem('user')) // Щоб перетворити назад у обьект
    console.log(res)
    console.log(user)
})
