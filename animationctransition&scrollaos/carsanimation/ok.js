
 const lux = document.getElementById('bid')
const cond = document.getElementById('main-text') 

 setTimeout(() => {
    addStylesTo(lux)
}, 5000)  
function addStylesTo(node) {
    node.style.display = 'none'
} 


const big = document.getElementById('onediv');
const lock = document.getElementById('one');
const big2 = document.getElementById('twodiv');
const lock2 = document.getElementById('two');
const big3 = document.getElementById('threediv');
const lock3 = document.getElementById('three');
const big4 = document.getElementById('fourdiv');
const lock4 = document.getElementById('four');
const big5 = document.getElementById('fivediv');
const lock5 = document.getElementById('five');
lock.onclick = () => {
    setTimeout(() => {
        addStylesTo(lock,'0px','0px','1000px')
        addStylesTo(big, '0px', '0px', '900px')
        addStylesTo(big2, '500px', '400px', '-650px')
        addStylesTo(big3, '500px', '400px', '0px')
        addStylesTo(big4, '500px','400px', '0px')
        addStylesTo(big5, '500px','400px', '0px')

    }, 1)
    function addStylesTo(node, width, height, right) {
        node.style.width = width
        node.style.height = height
        node.style.right = right
    }
}

lock2.onclick = () => {
    setTimeout(() => {
        addStylesTo(lock2,'0px','0px','1000px')
        addStylesTo(big2, '0px', '0px', '900px', )
        addStylesTo(big3, '500px', '400px', '-650px')
        addStylesTo(big4, '500px','400px', '0px')
        addStylesTo(big5, '500px','400px', '0px')
    }, 1)
    function addStylesTo(node, width, height, right) {
        node.style.width = width
        node.style.height = height
        node.style.right = right
        window.alert = 'alert'
    }
}

lock3.onclick = () => {
    setTimeout(() => {
        addStylesTo(lock3,'0px','0px','1000px')
        addStylesTo(big3, '0px', '0px', '900px')
        addStylesTo(big4, '500px','400px', '-670px')
        addStylesTo(big5, '500px','400px', '0px')

    }, 1)
    function addStylesTo(node, width, height, right) {
        node.style.width = width
        node.style.height = height
        node.style.right = right
    }
}

lock4.onclick = () => {
    setTimeout(() => {
        addStylesTo(lock4,'0px','0px','1000px')
        addStylesTo(big4, '0px', '0px', '900px')
        addStylesTo(big5, '500px','400px', '-670px')

    }, 1)
    function addStylesTo(node, width, height, right) {
        node.style.width = width
        node.style.height = height
        node.style.right = right
    }
}

lock5.onclick = () => {
    setTimeout(() => {
        addStylesTo(big5)
    }, 1)
    function addStylesTo(node) {
        node.style.display = 'none'
    }
}
