// soal 1
function dataHandling(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (j === 0) {
        console.log(`Nomor ID: ${input[i][j]}`);
      } else if (j === 1) {
        console.log(`Nama Lengkap: ${input[i][j]}`);
      } else if (j === 2) {
        console.log(`TTL: ${input[i][j]} ${input[i][3]}`);
      } else if (j === 4 && j !== 3) {
        console.log(`Hobi: ${input[i][j]}`);
      }
    }
    console.log("");
  }
}

let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

dataHandling(input);

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

// soal 2

// algoritma
// untuk memanipulasi isi inputan, dibuat looping agar mudah mengakses elemennya

function dataHandling2(input) {
  input[1] += "Elsharawy"
  input[2] = "Provinsi " + input[2]
  input.splice(4, 1, "Pria", "SMA Internasional Metro")

  let bulan = input[3].split("/")
  bulan[1] = "Mei"
  
  let tanggal = input[3].split("/")
  let tanggalReverse = []
  tanggalReverse.push(tanggal[2])
  tanggalReverse.push(tanggal[0])
  tanggalReverse.push(tanggal[1])
  
  let tanggalFormat = tanggal.join("-")
  let nama = input[1].slice(0, 15)
  
  return [
    input,
    bulan[1],
    tanggalReverse,
    tanggalFormat,
    nama
  ]
}

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
let hasil = dataHandling2(input)
console.log(hasil[0])

for(let j = 1; j < hasil.length; j++) {
  console.log(hasil[j])
}


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
