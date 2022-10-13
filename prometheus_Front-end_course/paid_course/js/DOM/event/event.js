const buttons = document.querySelectorAll('button')

 const buttonClickHandler = function (e) {
    e.target.disabled = true // Щоб спрацьовувала тільки раз
    console.log(e)
}

buttons.forEach((btn) => {
    btn.addEventListener('click', buttonClickHandler)
})