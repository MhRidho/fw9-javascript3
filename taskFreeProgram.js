// Jawaban 3.a ( Program jadwal belajar coding Mingguan)
const schedBelajar = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini belajar mandiri'))
            }
        })
    })
}
async function jadwalBelajar() {
    try {
        const results = await schedBelajar('Sabtu')
        // console.log('Hari ini hari kerja, karena sekarang hari', results)
        switch (results) {
            case 'Senin':
                console.log('Belajar Algoritma dan Pseudocode')
                break
            case 'Selasa':
                console.log('Belajar Javascript-1')
                break
            case 'Rabu':
                console.log('Belajar Javascript-2')
                break
            case 'Kamis':
                console.log('Belajar Javascript-3')
                break
            case 'Jumat':
                console.log('Belajar Membuat program responsive dengan Javascript')
                break
            default:
                console.log('Error')
        }
    } catch (err) {
        switch (err.message) {
            case 'Hari ini belajar mandiri':
                console.log('Hari ini belajar mandiri')
                break;
            default:
                console.log('Error Catch')
        }
    }
}
jadwalBelajar();


// Jawaban 3.b ( Program jadwal makan harian)
const cekJadwal = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Pagi', 'Siang', 'Malam']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Tidak boleh makan'))
            }
        })
    })
}
cekJadwal('Sore')
    .then((cek) => {
        switch (cek) {
            case 'Pagi':
                console.log('Sarapan kopi dan roti')
                break
            case 'Siang':
                console.log('Makan nasi')
                break
            case 'Malam':
                console.log('Makan buah dan Nasi')
                break
            default:
                console.log('Error Then')
        }
    })
    .catch((e) => {
        switch (e.message) {
            case 'Tidak boleh makan':
                console.log('Tidak boleh makan')
                break;
            default:
                console.log('Error Catch')
        }
    })