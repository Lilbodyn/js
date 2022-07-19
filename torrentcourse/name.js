const name = 'Bogdan'
const postsQty = 23

const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false
}

console.log(userProfile)

const myCity = {
    city: 'New York',
    cityGreeting: function () {
        console.log('Greetings!!!')
    }
}

myCity.cityGreeting()