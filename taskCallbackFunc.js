const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember'];
        if (!error) {
            callback(month)
        } else {
            callback(new Error('Sorry data not found', []))
        }
    })
}

getMonth((show) => {
    console.log(show)
})