const ol = document.querySelector('ol')

const newLi = document.createElement('li')
newLi.textContent = `List Item New`;

ol.append(newLi)

const clonedLi = newLi.cloneNode(true)

ol.prepend(clonedLi)
ol.remove() // Видалення елементів
ol.parentElement.removeChild(ol) // Теж видалення