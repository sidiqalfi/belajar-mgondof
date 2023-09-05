// soal 1
function shoutOut() {
  return "Halo Funcion!"
}

console.log(shoutOut())

console.log('')

// soal 2
let num1 = 1;
let num2 = 2

function calculateMultiply(num1, num2) {
  return num1 * num2
}

let hasilPerkalian = calculateMultiply(num1, num2)
console.log(hasilPerkalian)

console.log('')

// soal 3
let name = "Agus"
let age = 30
let address = "Jln. Malioboro, Yogyakarta"
let hobby = "gaming"

function prosesSentence(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!.`
}

let fullSentence = prosesSentence(name, age, address, hobby)
console.log(fullSentence)

console.log('')
