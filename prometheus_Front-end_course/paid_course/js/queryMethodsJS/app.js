document.getElementById('header')
const h1 = document.getElementById('header')
h1.innerText = 'New text'
h1.style.backgroundColor = 'red'
h1.style.colro = 'white'
const ul = document.querySelector('ul')
const liArr = ul.getElementsByClassName('item')
for (let item of liArr) {
    item.style.backgroundColor = 'green'
}
document.querySelector('.item')
document.querySelector('ul li:first-child')
document.querySelector('ul li:last-child')
document.querySelector('li')[1]
document.getElementsByClassName('item')[0]
document.getElementsByTagName('li')[1]
const list = document.querySelector('ul')
list.children[1]
list.childNodes
list.firstChild
list.firstElementChild
list.parentElement
list.parentNode
list.closest('body') //Як querySelector приблизно, доступається до люих ТЕГІВ. 
//Елменти предка по відношеню до вибраного цільового елементу
list.previousElementSibling // Сосідній вузол
list.previousSibling // Сусідній елемент зверху
list.nextElementSibling // Знизу сусід
