/* const ol = document.querySelector('ol')
const frag = document.createDocumentFragment()
for (let i = 0; i < 10; i++){
    const newLi = document.createElement('li')
    newLi.textContent = `list Item New - ${i}`
    frag.appendChild(newLi)
}

ol.appendChild(frag) */

 const ol = document.querySelector('ol')

 const newLi = document.createElement('li')
 newLi.textContent = 'List Item New';

/* ol.append(newLi) // Додає в кінець списку */

ol.lastElementChild.before(newLi) // Додає предостанім елементом

const newLi2 = document.createElement('li')
newLi2.textContent = `List Item New - pre`
/* ol.prepend(newLi2) // Додає в початок списку */

ol.firstElementChild.replaceWith(newLi2) // Замінює містами