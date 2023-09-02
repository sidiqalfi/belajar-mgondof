// cara membuat variable
var a = 'a'
let b = 'b'
const c = 'c'

// variable bisa menampung tipe data string (text), integer/number, boolean, array, object
let umur = 22 // integer
let apakahBenar = true // boolean
let uang = 5000.6 // number namun ada koma

// operator aritmatika
let angka1 = 10
let angka2 = 20
console.log(angka1 + angka2, 'pertambahan')
console.log(angka1 - angka2, 'pengurangan')
console.log(angka1 / angka2, 'pembagian')
console.log(angka1 * angka2, 'perkalian')
console.log(angka1 % angka2, 'modulus')

// disini kita belajar mengisi variable
let penampungHasilOperatorAritmatika = angka1 + angka2
console.log(penampungHasilOperatorAritmatika) // 30

penampungHasilOperatorAritmatika = angka1 - angka2
console.log(penampungHasilOperatorAritmatika) // -10 

penampungHasilOperatorAritmatika = angka1 / angka2
console.log(penampungHasilOperatorAritmatika) // kurang tahu 

penampungHasilOperatorAritmatika = angka1 * angka2
console.log(penampungHasilOperatorAritmatika) // 200 

penampungHasilOperatorAritmatika = angka1 % angka2
console.log(penampungHasilOperatorAritmatika) // 10 

// string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika
let firstName = 'agus'
let lastName = 'setiawan'
let fullName = firstName + ' ' + lastName
console.log(fullName)
console.log(firstName + ' ' + lastName)

// alur pembacaan code
// untuk membaca code kalian harus membacanya dari kiri ke kanan, dan atas ke bawah
// contoh
let number = 20
console.log(number + 10) // 30
number = 10
console.log(number + 10) // 20
number = false
console.log(number + 10) // 10

// pertanyaan? kenapa false - 10 tetap menjadi 10??? karena false = 0, true = 1
console.log(true + 10) // 11

// membaca error
// error itu jangan kalian takut, justru kalian harus takut kalau ada tidak ada yang namanya error dalam pemograman
// karena dalam pekerjaan kalau suatu fitur berjalan namun ada bug tapi tidak error, itu bikin si programmer rada
// muak buat mencari errornya atau letak kesalahannya

// contoh error
// const hewan = 'jerapah'
// console.log(hewan)
// hewan = 'banteng'

// auto komentar bisa dengan mencet ctrl + /

// tipsnya adalah, selalu teliti, dan kalau ada error dibaca aja, dan belajar ngoding perlu kebiasaan
// karena ngoding itu adalah habbit
