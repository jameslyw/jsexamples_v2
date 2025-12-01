// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray.length);

// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6]; 

const multiplyArrBy10 = mappedArray.map(item => item * 10); /* Short-hand of the arrow function */
console.log(multiplyArrBy10);

// ii - filter function of an array
// Implement your code here
const vowels = ["a", "e", "i", "o"];

// ? re-write the example below using an arrow function (long-form)
const filteredVowels = vowels.filter(vowel => vowel === "a" || vowel === "u");
console.log(filteredVowels);

// iii - sort function of an array
// Implement your code here
const nums =  [1, 3, 2, 5, 4, 6]; 
const names = ["James", "Chris", "Max", "Lenon"];

// Sort by descending order
// Implement your code here
const descendNums = nums.sort((a, b) => a > b ? -1 : 1 );
console.log("descendNums", descendNums);

const ascendNums = nums.sort((a, b) => a > b ? 1 : -1 ); /* num.sort() acheives the same: ascending sort */
console.log("ascendNums", ascendNums);

// Sort by descending order
// Implement your code here
const descendNames = names.sort((a, b) => a > b ? -1 : 1 );
console.log(descendNames);

const ascendNames = names.sort();   /* By default, array.sort() sorts in ascending order */
console.log(ascendNames);

// iv - reduce function of an array
// Implement your code here
const numbers = new Array(1, 2, 3, 4);
const product_of_arr = numbers.reduce((a, b) => a * b);     // 24
console.log(product_of_arr);

// another approach of applying a reduce function of an array
// Implement your code here
const arr = new Array(2, 3, 4, 5);

function product(a, b){
    return a * b;
}

const resultOfProduct = arr.reduce(product);
console.log(resultOfProduct);

// append elements to an EXISTING array
const teamList = ["Tanna", "Shalyn", "Zhang", "Francis"];   // 0 - 3
teamList.push("Muhaimin");                                  // 0 - 4
console.log(teamList.length);
console.log(teamList);

// remove the last element of an EXISTING array
teamList.pop();                                             // intrinsically known to remove lst element
console.log(teamList.length);                               // 0 - 3 
console.log(teamList);                                      // 4 names

// shift and unshift elements of an array
const mag7 = ["FB", "AMZN", "AAPL", "TSLA", "GOOG"];
console.log(mag7.shift());                                  // FB removed
console.log(mag7);                                          // AMZN, AAPL, NFLX, GOOG

// Unshift (prepend META, NVDA, MSFT)
mag7.unshift("META", "NVDA", "MSFT");
console.log(mag7);

// splice data (insert or replace data in an array)
const bballTeam = ["Jordan", "Pippen", "Bill"];             // 0 - 2
const index = 2;
const newPlayer = "Steve Carr";  
bballTeam.splice(index, 0, newPlayer);                      // ["Jordan", "Pippen", "Steve Carr", "Bill"]                           
console.log(bballTeam);

bballTeam.splice(bballTeam.length - 1, 1, "Rodman");        // Replace "Bill" with "Rodman" 
console.log(bballTeam);

// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here

// Do a count up (1 - 10)
const max = 10;
for (let index = 1; index <= max; index++) {
   console.log(index);
}

// change the index, the condition and the step (variables that can change)
const max100 = 100;
for (let index = 10; index <= max100 ; index = index + 10) {
    console.log(index);                                         // 10, 20, 30, 40, 50 ... 100
}

// count down (10 - 1); TERNARY operation
for (let index = max; index >= 0 ; index--) {
    // if(condition) ? execute if condition block : else block (ternary operation)
    (index === 0) ? console.log("Merry X'mas") : console.log(index);
}


// ii - for-each loop
// Implement your code here
const tickerSymbols = ["META", "AMZN", "GOOG", "MSFT"];

for (let index = 0; index < tickerSymbols.length; index++) {
    console.log(`${index + 1}. ${tickerSymbols[index]}`);
}

tickerSymbols.forEach((element, index) => { console.log(`${index + 1}. ${element}`) });

// iii - do-while loop (do first, check later)
// Implement your code here
// let i = 0;


// iv - while loop (check the conditions first before running the while loop)
// Implement your code here// ---------
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

const arr = new Array(2,3,4,5);

function product(a,b){
    return a * b;
}
    const resultOfProduct = arr.reduce(product);
    console.log(resultOfProduct);

// append elements to an EXISTING array

const teamList = ["Tanna", "Shalyn", "Zhang", "Francis"];
teamList.push("Muhaimin");
console.log(teamList.length);
console.log(teamList);

// remove the last element of an EXISTING array

teamList.pop();
console.log(teamList.length);
console.log(teamList);

// shift and unshift elements of an array
const mag7 = ["FB", "AMZN", "AAPL", "TSLA", "GOOG"];
console.log(mag7.shift());      // FB removed
console.log(mag7);                 // AMZN, AAPL, TSLA, GOOG

//unshift (prepend MTA, NVDA, MSFT)
mag7.unshift("META", "NVDA", "MSFT")
console.log(mag7);

// Splicing to insert into an array without removing values in it
const bballTeam = ["Jordan", "Pippen", "Bill"];  // array list is indexed as 0, 1, 2
const index = 2;
const newPlayer = "Steve Carr";                    // add in new player named "Steve Carr"
bballTeam.splice(index, 0, newPlayer);
console.log(bballTeam);

//? replace bill with rodman
bballTeam.splice(3, 1, "Rodman")
console.log(bballTeam)

// alternative way to replace
bballTeam.splice(bballTeam.length -1, 1, "Somebody");
console.log(bballTeam)

// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here
const max = 10;
for (let index = 1; index <= max; index++) {
//    const element = Array[index];
console.log(index);
}

const max100 = 100;
    for (let index = 10; index <= max100 ; index = index + 10) {
        console.log(index);
    }
// countdown (10 - 1)
for (let index = max; index >= 0 ; index--){
    //console.log(index);
    if (index === 1)
        console.log("Merry christmas");
        else    
        console.log(index);
}

// countdown ternary operation
for (let index = max; index >= 0; index--){
    // if(condition) ?execute if condition block : else block (ternary operation)
    (index === 0) ? console.log("Merry X'mas") : console.log(index);
}

// ii - for-each loop
// Implement your code here

const tickerSymbols = ["META", "AMZN", "GOOG", "MSFT"];
//for (let index = 0; index < tickerSymbols.length; index++){
//    console.log(tickerSymbols[index]);
//}

for (let index = 0; index < tickerSymbols.length; index++){
    console.log(`${index + 1}. ${tickerSymbols[index]}`)};
    console.log("this is an example of a for loop");




// tickerSymbols.forEach(element => { console.log(element)});
tickerSymbols.forEach((element, index) => { console.log(`${index + 1 }. ${element}`) });
console.log("this is a forEach loop");

// iii - do-while loop (execute first, check for the condition later)
// Implement your code here

let i = 0;

do{
    console.log(i);
    i++;
} while (i <= 5);
console.log("this is a do while loop");

// iv - while loop (check the conditions first before running the while loop)
// Implement your code here

let j = 0;
while (j <=10) {
    console.log(j); // print 0 to 10
    j++;
}
console.log(" this is a while loop");
