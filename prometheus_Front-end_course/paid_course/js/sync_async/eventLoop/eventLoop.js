const btn = document.getElementById('click')

function clickEventHandler(){
    //console.log('Clicked!!!')

    navigator.geolocation.getCurrentPosition(
        (data) => {
            setTimeout(() => {
                console.log(data)
            }, 2000)
        },
        (err) => {
            console.log(err)
        }, 
    )

    console.log('Getting position...')
}

btn.addEventListener('click', clickEventHandler)

/* let result = 0
for(let i = 0; i < 1999999999; i++) {
    result += i
}

console.log(result) */