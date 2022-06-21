const countdown = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello World')
    }, 2000)
    const success = true
    if (success) {
        reject(new Error('Terminated'))
    } else {
        reject(new Error('Unknown'))
    }
})

countdown
    .then((param1) => console.log(param1))
    .catch((e) => {
        switch (e.message) {
            case 'Terminated': {
                console.log('Program terminated with error')
                break
            }
            default: {
                console.log('Error happened')
            }
        }
    })