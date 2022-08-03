const lux = document.getElementById('bid')
const cond = document.getElementById('main-text')

cond.onclick = () => {
    alert('ad')
}
setTimeout(() => {
    addStylesTo(lux)
}, 3000)  
function addStylesTo(node) {
    node.style.display = 'none'
}

