const myCity = {
    city: 'Haysin',
    popular: false,
    country: 'Ukraine'
}

myCity['population'] = 550000
myCity.city = 'Vinnitsa'
myCity.national = 'Ukrainian';

console.log(myCity)

const countryProperetyName = 'country'
myCity[countryProperetyName] = 'USA'

console.log(myCity)

const myHome = {
    city: 'Haysin',
    info: {
        isPopular: true,
        country: 'Ukraine'
    }
}
console.log(myHome.info.isPopular)
delete myHome.info.isPopular

console.log(myHome)