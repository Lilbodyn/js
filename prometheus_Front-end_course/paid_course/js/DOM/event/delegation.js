/* const items = document.querySelectorAll('li')

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.classList.toggle('highlight')
    })
}) */

const list = document.querySelector('ul')

// closest - шукає найблищій елемент до батьківського
// target - дає доступ до всіх елементів які знаходять в батьківському елементі

/* list.addEventListener('click', (e) => {
    e.target.closest('li').classList.toggle('highlight')
}) */

list.addEventListener('click', (e) => {
    console.log('Arrow-function', this)
})
list.addEventListener('click', function (e) {
    console.log('Normal-function', this) // Виводить цільовий елемент, в даному випадку ul class='list-group'
})