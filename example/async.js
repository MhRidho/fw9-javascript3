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

async function evalCountdown() {
    try {
        const results = await countdown
        console.log('Success', results)
    } catch (err) {

        switch (err.message) {
            case 'Terminated': {
                console.log('Failed', err.message)
                break
            }
            default: {
                console.log('Failed', err.message)
            }
        }
    }
    finally {
        console.log('Ended Process')
    }
}

evalCountdown()