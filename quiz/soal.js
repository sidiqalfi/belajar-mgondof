// soal 1
function bandingkanAngka(angka1, angka2) {
  if(angka2 > angka1) {
    return true
  } else if (angka2 === angka1) {
    return -1
  } else {
    return false
  }
}

// test case
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

console.log('')

// soal 2 
function balikKata(kata) {
  let result = ""
  for(let i = kata.length - 1; i >= 0; i--) {
    result += kata[i]
  }
  return result
}

// test case 
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

console.log('')

// soal 3
function konversiMenit(time) {
  if(time > 60) {
    let jam = Math.floor(time / 60)
    let menit = Math.abs(jam * 60 - time)
    
    if (menit < 10) {
      return `${jam}:0${menit}` 
    } else {
      return `${jam}:${menit}` 
    }
    return menit
  } else {
    return `0:${time}`
  }
} 

// test cases 
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
console.log(konversiMenit(180)); // 2:00

console.log('')

// soal 4
function xo(str) {
  // code
  let charaX = "" 
  let charaO = "" 
  
  for(let i = 0; i < str.length; i++) {
    if(str[i] === 'x') {
      charaX += "x" 
    } else if (str[i] === "o") {
      charaO += "o"
    }
  }

  if(charaX.length === charaO.length) {
    return true
  } else {
    return false
  }
}

// test cases 
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
