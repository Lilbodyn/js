let number = 0
// getBoundingClientRect().bottom // Вимірює відстань між вікном перегляду і нижньою мижею сторінки
window.addEventListener('scroll', (event) =>{
    const distantsToBotton = document.body.getBoundingClientRect().bottom

    if(distantsToBotton < document.documentElement.clientHeight + 150){ //Враховує потенційність смугі прокрутки(довжину прокрутки) // Якщо довжина сайта обмежена, то додається ще 150px
        number++ // Числа збільшуюуться
        const div = document.createElement('div') // Створює елемент
        div.innerHTML = `<p>Element - ${number}</p>` // Додає текст в елемент

        document.body.append(div) // Додає елемент в баді
    }
})