// looping menggunakan while
let i = 0
while(i <= 10) {
  if(i === 0) { 
    console.log('looping pertama')
  }
  console.log(i)
  if(i === 10) {
    let j = 10
    while(j >= 0) {
      if(j === 10) {
        console.log('looping kedua')
      }
      console.log(j)
      j--;
    }
  }
  i++;
}

// looping menggunakan for
for(let i = 0; i <= 10; i++) {
  if(i === 0) {
    console.log('looping pertama')
  }
  console.log(i)
  if (i === 10) {
    for(let j = 10; j >= 0; j--) {
      if(j === 10) {
        console.log('looping kedua')
      }
      console.log(j)
    }
  }
}

// angka ganjil dan angka genap
for(let i = 0; i <= 100; i++) {
  if(i % 2 === 0) {
    console.log(i, 'genap')
  } else {
    console.log(i, 'ganjil')
  }
}

// counter kelipatan
let i = 0;
while (i <= 100) {
  if(i % 3 === 0) {
    console.log(i)
  }
  i += 2;
}

let j = 0;
while (j <= 100) {
  if(j % 6 === 0) {
    console.log(j)
  }
  j += 5;
}

let h = 0;
while (h <= 100) {
  if(h % 10 === 0) {
    console.log(h)
  }
  h += 9;
}

// bintang asteriks
let input = 5
let result = ""
for(let i = input; i > 0; i--) {
  result += "*"
  console.log(result)
}
