// while()
// for ()

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// dalam looping ada yang namanya arah, kiri atau kanan, kiri itu pengurangan, kanan itu penambahan
// hati hati akan infinite loop, atau loopnya tidak jalan

// for (let i = 1; i >= 0; i--) {
//   console.log(i)
// }

// let nama = "sidiq"

// ada yang namanya method length untuk tipe data string dan array
// method length mengembalikan nilai angka, total huruf yang ada pada string, atau total element yang ada pada array

// for (let i = 0; i < nama.length; i++) {
//   console.log(nama[i])
// }

// oke, jadi pada tipe data string atau array di javascript, ada yang namanya indexing
// dimana index tersebut SUDAH PASTI dimulai dari 0 

// console.log(nama[0] + nama[5])

// diberikan kasus untuk mengembalikan suatu kata, tanpa menggunakan reverse

// let name = "sidiq" // length 5, sedangkan index itu dari 0, s > 0, i > 1, d > 2, i > 3, q > 4
// let result = ""

// for(let i = name.length - 1; i >= 0; i--) { // i = 5 - 1; 5 - 1 >= 0; i--
//   result += name[i]; // q > qi > qid > qidi > qidis
// }

// console.log(result)

// for(let i = 0; i < 5; i++) {
//   for(let j = 0; j <= i; j++) {
//     console.log(j)
//   }
//   console.log('')
// }
// console.log('selesai')

// kesimpulan looping sering bertemu dengan method length
// looping itu agar membuat code menjadi pendek
// looping itu agar membuat suatu proses menjadi dinamis

// counter pada looping

// let i = 0; // i adalah counternya
//
// while(i < 5) {
//   console.log(i)
//   i += 2;
// }

let i = 0;

// disini kita akan belajar menggabungkan dengan if else
// while(i < 50) {
//   // disini kit akan mencari ganjil dan genap
//   if (i % 2 === 0) {
//     console.log(i, ' adalah bilangan genap')
//   } else {
//     console.log(i, ' adalah bilangan ganjil')
//   }
//   i++
// }

// simplenya modulus operator adalah sisa bagi
// misal 3 / 2 hasilnya akan koma, dan kalau 3 % 2 hasilnya akan jadi 1
// maka bisa dibilang apapun angkanya kalau di modulus apapun itu angkanya dan hasilnya adalah 0 
// maka itu kelipatannya
// contoh n % 3 === 0 // maka ini adalah kelipatan 3
// contoh n % 5 === 0 // maka ini adalah kelipatan 5
// contoh n % 2 === 0 // maka ini adalah kelipatan 2, dan 2 kebetulan bisa menentukan ganjil dan genap

// problem fizzbuzz
// jika  i adalah kelipatan 3 maka tampilkan fizz
// jika i adalah kelipatan 5 maka tampilkan buzz 
// jika i adalah kelipatan 3 dan 5 maka tampilkan fizzbuzz
// jika bukan kelipatan di atas maka tampilkan angka
// for(let i = 0; i < 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('fizzbuzz')
//   } else if (i % 3 === 0 && i % 5 !== 0) {
//     console.log('fizz')
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log('buzz')
//   } else {
//     console.log(i)
//   }
// }

// disini kalian harus coba iseng ubah ubah conditional statmentnya
// demi pemahaman yang lebih lanjut

// pada looping ada yang namanya break dan continue
// break membuat looping berhenti sepenuhnya
// continue membuat loop skip di iteral tertentu

for(let i = 0; i < 10; i++) {
  if(i === 7) {
    // console.log(i, ' berhenti disini')
    // break;
    continue;
  }
  console.log(i)
}
