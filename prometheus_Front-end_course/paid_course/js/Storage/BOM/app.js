/* function sayHi() {
    alert('Hello')
} */
if(navigator?.geolocation?.getCurrentPosition){ // Якщо доступне навігратор геолокейшин
    navigator.geolocation.getCurrentPosition(
    (data) => {
        console.log(data)
    },
    (error) => {
        console.log(error)
    }
) // місце положення користувача
} else{
    return
}

window.location.href = 'https...' // можна повернутись назад на іншу сторінку викоористовуючи кнопку бекзамінить в інсторії на іншу сторінку


