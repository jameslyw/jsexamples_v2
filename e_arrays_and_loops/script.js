// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array


// B) ARRAY METHODS
const myArray = [1, 2, 3, 4, "hello", true, null];
console.log(myArray.length);

// i - map function of an array
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6];

const multiplyArrBy10 = mappedArray.map(item => item *10); /* shorthand of the arrow function */
console.log(multiplyArrBy10);


// ii - filter function of an array
// Implement your code here

const vowels = ["a", "e", "i", "o"];

const filteredVowels = vowels.filter(vowel => vowel === "a" || vowel === "u" );
console.log(filteredVowels);

// iii - sort function of an array
// Implement your code here
const nums = [1, 2, 3, 4, 5, 6];
const names = ["James", "Chris", "Max", "Lenon"];

// Sort by ascending order
// Implement your code here
const ascendNums = nums.sort((a, b) => a > b ? 1 : -1 );
console.log(ascendNums);

const ascendNums2 = nums.sort((a, b) => a < b ? -1 : 1 );
console.log(ascendNums2);

const ascendNames = names.sort((a,b) => a > b ? 1 : -1);
console.log(ascendNames, "by ascending name sorted with 1 : -1");

// Sort by descending order
// Implement your code here
const desNums = nums.sort((a,b) => a > b ? -1 : 1 );
console.log(desNums, "descending using change of operator");

const revNums = nums.reverse();
console.log(revNums, "using reverse");

const descendNames = names.sort((a,b) => a > b ? -1 : 1);
console.log(descendNames, "by descending name");

const revNames = names.toReversed();
console.log(revNames, "using toReversed");


// iv - reduce function of an array
// Implement your code here

const numbers = new Array(1, 2, 3, 4);
const product_of_arr = numbers.reduce((a, b)=> a + b);
console.log(product_of_arr, "using + operator"); // 10

const prd_of_arr = numbers.reduce((a, b) => a * b);
console.log(prd_of_arr, "using * operator"); // 24
// another approach of applying a reuduce function of an array
// Implement your code here


// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here


// ii - for-each loop
// Implement your code here


// iii - do-while loop (execute first, check for the condition later)
// Implement your code here


// iv - while loop (check the conditions first before running the while loop)
// Implement your code here