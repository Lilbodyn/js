// Event loop

/* const timeout = setTimeout(() => {
    clearTimeout(timeout)
    console.log('after timeout')
}, 2500)

const interval = setInterval(() => {
    clearTimeout(timeout)
    console.log('after interval')
}, 1000) */

const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve()
             reject('Что-то пошло не так. Повторите попитку')
    }, wait)
    })
    return promise
}

/* delay(2500)
    .then(() => {
        console.log('after 2 seconds')
    })
    .catch(err => console.error('Error', err))
    .finally(() => console.log('Finally')) */

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

//getData().then(data => console.log(data))

async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data', data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally')
    }
}

asyncExample()  