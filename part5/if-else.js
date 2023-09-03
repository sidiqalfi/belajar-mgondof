// let angka = 30
//
// console.log(angka >= 50) // tergantung nilainya, hasilnya antara true atau false
//
// if (angka >= 50) { // true atau false
//   console.log('lulus')
// } else if (angka >= 40) {
//   console.log('tidak lulus pakai banget')
// } else {
//   console.log('tidak lulus')
// }

let nilai = 100

if (nilai >= 80 && nilai <= 100) {
  nilai = "a"
} else if (nilai => 70 && nilai <= 80) {
  nilai = "b"
} else if (niali => 60 && nilai <= 70) {
  nilai = "c"
} else {
  nilai = "d"
}

console.log(nilai)

nilai = 100
// && semua kondisi harus terpenuhi lalu dia akan menghasilkan nilai true
// or salah satu kondisi harus terpenuhi lalu dia akan menghasilkan nilai true
let banding = nilai >= 80 && nilai <= 100
console.log(banding, '&&')
let banding2 = nilai >= 80 || nilai <= 100
console.log(banding2, '||')
let banding3 = nilai != 50
console.log(banding3, '!=')

// apa bedanya == dan ===
let x = 50 // tipe data number
let y = "50" // tipe data string

let banding4 = x == y
console.log(banding4, '==')
let banding5 = x === y
console.log(banding5, '===')

// if else ini juga bisa dibuat bersarang
let number = 6
if (number > 5) {
  if (number % 2 === 0) {
    console.log("lebih besar dari 5 dan genap")
  } else {
    console.log("lebih besar dari 5 dan ganjil")
  }
} else {
  if (number % 2 === 0) {
    console.log("lebih kecil atau sama dengan dari 5 dan genap")
  } else {
    console.log("lebih kecil atau sama dengan dari 5 dan ganjil")
  }
}

// kondisi switch digunakan untuk menampilkan aksi yang berbeda tergantung dengan kondisinya
let cuaca = "cerah"
switch (cuaca) {
  case "cerah": 
    console.log("cuaca hari ini cerah")
    break
  case "mendung":
    console.log("cuaca hari ini mendung")
    break
  case "berawan":
    console.log("cuaca hari ini berawan")
    break
  case "hujan":
    console.log("cuaca hari ini hujan")
    break
  default:
    console.log("cuaca tidak diketahui")
}
