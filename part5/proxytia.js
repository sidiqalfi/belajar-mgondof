// algoritma
// data nama dan peran
// jika nama kosong maka tampilkan pesan peringatan nama wajib di isi
// jika peran kosong maka tampilkan pesan peringatan pilih peranmu untuk memulai game
// data peran = ksatria, tabib, penyihir
// jika peran ksatria maka tampilkan pesan kamu dapat menyerang menggunakan senjatamu
// jika peran tabib maka tampilkan pesan kamu dapat membantu temanmu yang terluka
// jika peran penyihir maka tampilkan pesan ciptakan keajaiban yang membantu kemenanganmu 
// jika peran kosong maka tampilkan pesan kamu jadi bot aja ya, peran yang kamu pilih tidak ada

let nama = "sidiq"
let peran = ""

if (nama !== "") {
  if (peran !== "") {
    if (peran === "ksatria") {
      console.log("kamu dapat menyerang menggunakan senjatamu")
    } else if (peran === "tabib") {
      console.log("kamu dapat membantu temanmu yang terluka")
    } else if (peran === "penyihir") {
      console.log("ciptakan keajaiban yang membantu kemenanganmu")
    }
  } else {
    console.log("pilih peranmu untuk memulai game")
  }
} else {
  console.log("nama wajib di isi")
}
