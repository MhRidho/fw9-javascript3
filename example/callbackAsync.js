function countdown2sec(cb) {
    setTimeout(() => {
        cb()
    }, 2000)
}

const cd4s = (cb) => {
    countdown2sec(() => {
        countdown2sec(() => {
            cb()
        })
    })
}

function cd6s(cb) {
    countdown2sec(() => {
        cd4s(cb)
    })
}

cd6s(() => {
    console.log('Hello')
})