const person = {
    name: 'Bohdan',
    age: 16,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    /* 'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed Key', //key_4 */
    greet () {
        console.log('greet from person')
    },
    info() {
    //console.log('this', this)
        console.info('Информация про человека по именни:', this.name)
    }
}
/* console.log(person.name)
const ageKey = 'age'
console.log(person[ageKey])
console.log(person['complex key'])
person.age++
person.languages.push('by')
person.greet()
//person['key_4'] = undefined
delete person['key_4']

console.log(person)
console.log(person['key_4']) */

/* const name = person.name
const age = person.age
const languages = person.languages */

/* const {name, age: personAge = 10, languages} = person

console.log(name, personAge, languages) */

/* for (let key in person) {
    if (person.hasOwnProperty(key)) {
    console.log('key: ', key)
    console.log('value: ', person[key])        
    }
} */

/* Object.keys(person).keys.forEach((key) => {
    console.log('key: ', key)
    console.log('value: ', person[key])
}) */

// Context
//person.info()

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },

    keysAndValues() {
        Object.keys(this).forEach(function (key) {
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('----start----')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length -1) {
                console.log('--------')
            }
        })
        if (bottom) {
            console.log('----End----')
        }
    }
}

/* const bound = logger.keys.bind(person)
bound() */
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])
