function helloWorld() {
  return "hello world"
} // fungsi ini punya nilai "Hello World"

console.log(helloWorld)

function test() {
  console.log("test")
}

console.log(test())

// return memberikan nilai ke fungsi, bila tidak memberikan return di fungsi
// maka fungsi tersebut mempunyai nilai undefined

let hello = helloWorld()
let helll = "hello world"

function tambahAngka(angka1, angka2) { // parameter disini bisa banyak sekali, sesuaikan kebutuhan
  return angka1 + angka2;
}

console.log(tambahAngka(1, 2))
console.log(tambahAngka(2, 5))
console.log(tambahAngka(8, 2))
console.log(tambahAngka(5, 6))
console.log(tambahAngka(3, 7))
console.log(tambahAngka()) // misal tanpa parameter

let angka5 = tambahAngka(2, 3)
console.log(angka5)

function balikKata(kata) {
  let balikKata = ""
  for(let i = kata.length - 1; i >= 0; i--) {
    balikKata += kata[i]
  }
  return balikKata;
}

console.log(balikKata("jerapah"))
console.log(balikKata("kucing"))
console.log(balikKata("sapi"))
console.log(balikKata("anjing"))

function nambahHurufBesarSetelahSpasi(kata) {
  let result = ""
  for(let i = 0; i < kata.length; i++) {
    if(i === 0 || kata[i - 1] === " ") {
      result += kata[i].toUpperCase()
    } else {
      result += kata[i]
    }
  }
  return result;
}

console.log(nambahHurufBesarSetelahSpasi("sidiq alfiansyah"))
console.log(nambahHurufBesarSetelahSpasi("muh afiq makmun"))
console.log(nambahHurufBesarSetelahSpasi("anik novitrasari"))

let nama = "sidiq" // variable ini ada pada global scope
// yang mana bisa diakses pada fungsi yang sejajar

function helloDunia() {
  let hello = "hello dunia" // variable ini ada di local scope
  // local scope fungsi hello, yang mana akan error kalau variable diakses dari luar fungsi
  console.log(hello + nama)
}

console.log(hello) // ini akan error

// simplenya penulis menyebutkan ada hierarki pada pemograman
// contoh

let nilai = 50

if(nilai >= 50) {
  let hasil = "lulus" // disini bisa deklarasi variable hasil
} else {
  hasil = "tidak lulus" // disini juga bisa deklarasi variable hasil
}

console.log(hasil) // namun bila dijalankan ya akan error, karena variable hasil hanya bisa
// diakses pada local scope if dan else

// { dan } pada if else, dan looping itu akan menghasilkan block scope

// global scope
if(kondisi) {
  // block scopenya if
} else {
//   block scopenya else
}

// ini juga masih global scope
function ntah() {
  // local scopenya function ntah
  if(kondisi) {
    // ini makin dalalm yang dinamakan block scope
    // let hello = "woi"
  }
  console.log(hello) // akan error karena diluar jangkuan scope
}

// solusi gimana tuh kalau emang pengen manipulasi variable dalam conditional statment
// berikut solusinya

let woi = "woi"
function nah() {
  // local scopenya si fungsi ntah
  let hello = ""
  if (kondisi) {
    hello = "wo"
    console.log(hello) // ini gak akan error, karena var hello ada di luar scope
    let akanError = "hehe"
  }
  // console.log(akanError) // ini akan error, karena diluar jangkuan scope block
  console.log(hello) // ni gak akan error, soalnya log ini dan var hello berada di scope yang sama
  console.log(woi) // ini juga gak eror, karena memanggil var woi yang berada di luar/atas/global scope
}
