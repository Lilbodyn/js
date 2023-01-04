function callback() {
    console.log(`Hello ${Math.random()}`)
}

/* const timerId = setTimeout(callback, 2000) // Запускається раз через вказаний інтервал часу

clearTimeout(timerId) видалення часу */ 

const timerId2 = setInterval(callback, 1000) // запускається щоразу через данний період часу

setTimeout(() => { // Зупинити через якийсь час
    clearInterval(timerId2)
    console.log('stop')
}, 4100)