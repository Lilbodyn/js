const person = {
    get name() {
        return this._name.toUpperCase()
    },
    set name(value){
        if (value && value.trim() !== '') {
            this._name = value;
            return
        }
        this._name = 'default'
    },
    hobbies: ['sports', 'codding']
}
const value = prompt('What is your name?', '')
person.name = value
console.log(person._name)