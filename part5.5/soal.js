// soal 1
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);

// soal 2
let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];
let secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
let thirdWord = word[15] + word[16];
let fourthWord = word[18] + word[19];
let fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// soal 3
let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let secondword3 = word3.substring(4, 14);
let thirdword3 = word3.substring(15, 17);
let fourthword3 = word3.substring(18, 20);
let fifthword3 = word3.substring(21, 25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondword3);
console.log('Third Word: ' + thirdword3);
console.log('Fourth Word: ' + fourthword3);
console.log('Fifth Word: ' + fifthword3);

// soal 4
let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let secondWord4 = word4.substring(4, 14);
let thirdWord4 = word4.substring(15, 17);
let fourthWord4 = word4.substring(18, 20);
let fifthWord4 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = secondWord4.length;
let thirdWordLength = thirdWord4.length;
let fourthWordLength = fourthWord4.length;
let fifthWordLength = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);
