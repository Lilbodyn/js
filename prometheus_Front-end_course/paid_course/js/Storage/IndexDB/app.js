const dbRequest = indexedDB.open('test', 1)
let db

dbRequest.onsuccess = function(event) { // Щоб комунікувати з успішномуствореною базою і свторювались ові обєкти
    db = event.target.result // дає доступ до баи даних

    const objStore = db.createObjectStore('todos', {keyPath: 'id'}) // Для створення сховища обєктів

    objStore.transaction.oncomplete = function(){// Іннацілювати стховище
        const todosStore = db.transaction('todos', 'readwrite').objectStore('todos')

        todosStore.add({
            id: 1,
            task: 'Do something',
            comleted: true
        })
    } 
}

dbRequest.onupgradeneeded = function(event) { // Щоб комунікувати з успішномуствореною базою
    db = event.target.result // дає доступ до баи даних

    const objStore = db.createObjectStore('todos', {keyPath: 'id'}) // Для створення сховища обєктів

    objStore.transaction.oncomplete = function(){// Іннацілювати стховище
        const todosStore = db.transaction('todos', 'readwrite').objectStore('todos')

        todosStore.add({
            id: 1,
            task: 'Do something',
            comleted: true
        })
    } 
}

dbRequest.onerror = function(event) { // Неуспішний запит до бази
    console.log('Error')
}

const store = document.getElementById('store')
const retrieve = document.getElementById('retrieve')

store.addEventListener('click', () => {
    const todosStore = db.transaction('todos', 'readwrite').objectStore('todos')

    todosStore.add({
        id: 2,
        task: 'Do something else',
        comleted: false
    })
})

retrieve.addEventListener('click', () => { 
    const todosStore = db.transaction('todos', 'readwrite').objectStore('todos')

    const request = todosStore.get(2)
    request.onsuccess = function(event){
        console.log(request.result)
    }
})
