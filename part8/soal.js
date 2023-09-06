const x = [3, 5, 12]
let result = 0;
let resultj = 0
let resulth = 0

for(let i = 0; i < x.length; i++) {
  result += x[i];
}

let j = 0;
while(j < x.length) {
  resultj += x[j];
  j++
}

let h = 0;
do {
  resulth += x[h];
  h++
} while (h < x.length)

console.log(`hasil dari x = ${x.join(" + ")} adalah ${result}`)
console.log(`hasil dari x = ${x.join(" + ")} adalah ${resultj}`)
console.log(`hasil dari x = ${x.join(" + ")} adalah ${resulth}`)
