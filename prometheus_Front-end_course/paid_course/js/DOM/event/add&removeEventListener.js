const btn = document.querySelector('.btn-primary')
const remove = document.querySelector('.btn-warning')

 const buttonClickHandler = function () {
    console.log('Button Clicked!')
}

btn.addEventListener('click', buttonClickHandler) // 1 - подія, 2 - функція, 3 - булове значення (не обовязкове)
remove.addEventListener('click', () => {
    btn.removeEventListener('click', buttonClickHandler)
})