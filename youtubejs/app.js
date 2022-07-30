/* window.alert('1')
window.prompt('Как тебя зовут?')
window.confirm('Тебе 16 лет?')
 */

const heading = document.getElementById('hello')
//const heading2 = document.getElementsByTagName('h2')
//const heading2 = document.getElementsByClassName('h2-class')
//const heading2 = document.querySelector('h2')
const heading2 = document.querySelector('.h2-class')
console.log(heading2)


//const heading3 = heading2.nextElementSibling

const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length - 1]
console.log(heading3)

setTimeout(() => {
    addStylesTo(heading,'JavaScript')
}, 1500)

setTimeout(() => {
const link = heading3.querySelector('a')
    link.addEventListener('click', (event) => {
        event.preventDefault()
        console.log('Click on lnk', event.target.getAttribute('href'))
        const url = event.target.getAttribute('href')

        window.location = url
    })
    addStylesTo(link, 'И все получиться', 'yellow', '40px')
}, 4500)

setTimeout(() => {
    addStylesTo(heading2, 'Практикуйся', 'blue', '35px')
}, 3000)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '20px'
    //node.style.width = '100%'
    node.style.display = 'block'
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}
//https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else{
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    } 
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'blue') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else{
        heading2.style.color = 'blue'
        heading2.style.backgroundColor = '#000'
    } 
})