try {
    hello.toUpperCase()
} catch {
   alert('There has been an error here!') 
}

function yell(msg) {
    const message = msg
    try {
            if (typeof message !== 'string') {
                throw {
                    message: 'Pleace pass a string next time'
                }
            }
        console.log(message.toUpperCase().repeat(3))
    } catch (error) {
        console.log(error)
        alert(error.message)
    } finally{
        console.log('I am in finally!')
    }
}
const value = prompt('Enter your string:', '')
yell(value)

console.log('Some other code after the error...')