// creating an array
const cars = ["saab", "volvo", "BMW"];

// spaces and line breaks are not important
const cars2 = [
  "saab",
  "volvo",
  "BMW",
]

// create an array and provide the elements 
const cars3 = []
cars3[0] = "saab";
cars3[1] = "volvo";
cars3[2] = "BMW";

// create an array using keyword new
// not recomended
const cars4 = new Array("saab", "volvo", "BMW");

// accessing array elements
console.log(cars[0])
console.log('')

// changing an arrya elements
cars[0] = "ford";
console.log(cars[0])
console.log('')

// converting an array to a string 
let fruits = ["apple", "banana", "orange"];
console.log(fruits.toString())
console.log('')

// acces the full array
console.log(cars)
console.log('')

// arrays are objects but javascript arrays are best described as arrays
// array elements can be object

// array properties and mehtods
cars.length // return the number of elements
cars.sort() // sorts the array

// the length property
console.log(cars.length)
console.log('')

// acces the first array elements
console.log(cars[0])
console.log('')

// accessing the last array element
console.log(cars[cars.length - 1])
console.log('')

// looping array elements
for(let i = 0; i < cars.length; i++) {
  console.log(cars[i])
}
console.log('')

// looping array using forEach()
cars.forEach((element) => {
  console.log(element)
})

// adding array element
cars.push("tesla")
console.log(cars)

// also can use the length property
cars[cars.length] = "tesla"
console.log(cars)

// warning : adding elements with high indexes can create unlimited "holes" in array
cars[10] = "tesla"
console.log(cars)
console.log('')

// how to reconigce array
// echmascript 5 2009
console.log(Array.isArray(cars))
console.log(cars instanceof Array)
