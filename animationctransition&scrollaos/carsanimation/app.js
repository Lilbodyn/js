const heading = document.getElementById('first')


setTimeout(() => {
    addStylesTo(heading)
    location.href = 'scrollanimation.html';
}, 2200)

function addStylesTo(node) {
    node.style.display = 'none'
} 
