/* const newLi = document.createElement('li')
const ol = document.querySelector('ol')
ol.appendChild(newLi)
newLi.textContent = 'List Item New'
newLi.style.backgroundColor = 'green' */

const newLi = document.createElement('li')
const text = document.createTextNode('List Item New')
newLi.appendChild(text)
document.querySelector('ol').appendChild(newLi)