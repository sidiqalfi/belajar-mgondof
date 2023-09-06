let array = [1,2,3,4,5]

console.log(array)

// pada array kalian bisa menampung banyak data dan tipe data yang berbeda

let array2 = [1, "abc", [1,2,3], {nama: "test"}, null, false]
// cuman ini contoh ya ga mungkin ada, namun array bisa menampung kayak diatas
// lebih bagus kalau array di isi hanya 1 tipe data

// array itu ada dua jenis
// array 1 dimensi dan array 2 dimensi
let dimensi1 = [1,2,3,4,5] // array 1 dimensi
let dimensi2 = [[1,2,3], [4,5,6]] // array 2 dimensi

// cara mengakses array
// gunakan index 

console.log(dimensi1[2]) // 3
console.log(dimensi1[4]) // 3

console.log(dimensi2[0]) // 123
console.log(dimensi2[1]) // 456 
console.log(dimensi2[2]) // undefined 

console.log(dimensi2[0][0]) // 1
console.log(dimensi2[1][2]) // 6

// cara untuk looping array 2 dimensi
console.log('ini looping dimensi 2')
for(let i = 0; i < dimensi2.length; i++) {
  for(let j = 0; j < dimensi2[i].length; j++) {
    console.log(dimensi2[i][j])
  }
}

// normalnya array dimensi 2 sering digunakan pada kasus tabel
// [
//   ["bryan", "indonesia", "22 tahun"],
//   ["john", "inggris", "25 tahun"]
// ] 

let orang = [
  ["bryan", "indonesia", "22 tahun"],
  ["john", "inggris", "25 tahun"]
]

for(let i = 0; i < orang.length; i++) {
  for(let j = 0; j < orang[i].length; j++) {
    if(j === 0) {
      console.log(`Nama : ${orang[i][j]}`)
    } else if(j === 1) {
      console.log(`Negara : ${orang[i][j]}`)
    } else {
      console.log('umur : ' + orang[i][j])
    }
  }
  console.log('')
}
