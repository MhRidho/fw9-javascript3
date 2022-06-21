// Jawaban 1.a ( Penggunaan Promise Then and Catch)
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        })
    })
}
cekHariKerja('Rabu')
    .then((cek) => {
        switch (cek) {
            case 'Senin':
                console.log('Senin merupakan hari kerja')
                break
            case 'Selasa':
                console.log('Selasa merupakan hari kerja')
                break
            case 'Rabu':
                console.log('Rabu merupakan hari kerja')
                break
            case 'Kamis':
                console.log('Kamis merupakan hari kerja')
                break
            case 'Jumat':
                console.log('Jumat merupakan hari kerja')
                break
            default:
                console.log('Error Then')
        }
    })
    .catch((e) => {
        switch (e.message) {
            case 'Hari ini bukan hari kerja':
                console.log('Hari ini merupakan hari libur')
                break;
            default:
                console.log('Error Catch')
        }
    })

// Jawaban 1.b ( Penggunaan Promise Try and Catch)
const cekHariKerjaTry = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        })
    })
}

async function cekHariKerjaTry2() {
    try {
        const results = await cekHariKerjaTry('Selasa')
        console.log('Hari ini hari kerja, karena sekarang hari', results)
    } catch (err) {
        switch (err.message) {
            case 'Hari ini bukan hari kerja':
                console.log('Hari ini merupakan hari libur')
                break;
            default:
                console.log('Error Catch')
        }
    }
}

cekHariKerjaTry2();