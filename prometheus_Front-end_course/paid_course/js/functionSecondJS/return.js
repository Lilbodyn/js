let a = 'global'

function outer() {
    let b = 'outher'

    function inner() {
        let c = 'inner'

        console.log('from inner: ', c)
        console.log('from inner: ', b)
        console.log('from inner: ', a)
    }

    //inner() // можна використовувати return inner

    console.log('from outer ', a)
    console.log('from outer ', b)

    return inner;
}

const inner2 = outer() // Тільки так можемо керувати
inner2()