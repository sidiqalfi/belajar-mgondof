// algoritma
// memformat tanggal
// menggunakan switch case, jika bulan 1 = januari dan seterusnya

let tanggal = 21; // assign nilai variable tanggal disini dengan angka 1-31
let bulan = 3; // assign nilai variable bulan disini dengan angka 1-12
let tahun = 2023; // assign nilai variable tahun disini dengan angka 1900 - 2200

switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
  default:
    bulan = "Error";
    break;
}

console.log(`${tanggal} ${bulan} ${tahun}`);
