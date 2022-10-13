const list = document.querySelector('ol')
list.innerHTML
list.textContent
list.textContent = 'New Item' // Змінює текст
list.innerHTML = '<li> New Item </li>' // Для писання HTML коду
list.innerHTML = list.innerHTML + '<li> New Item </li>' // Додає нові елементи
const section = document.querySelector('section')
section.innerHTML = section.innerHTML + '<p class="text-danger">Wrong value!!!</p>'
section.insertAdjacentHTML('beforeend', '<p class="text-danger">Wrong value!!!</p>')
