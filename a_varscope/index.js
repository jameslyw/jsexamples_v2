// 1. primitive data type

let pi = 3.142;
console.log(pi); // variable with a number 3.142

let strValue = "Hello";
console.log(typeof strValue); // variable (camelcase naming convention) with a value of "Hello"

let boolValue = true; // variable storing a boolean of true
console.log(typeof boolValue);

let nullValue = null;
console.log(typeof nullValue);   // varabile of null value (object)

let undefinedValue;
console.log(typeof undefinedValue) ; // variable is declared but not initialized

// 2. non-primitive types

let arr = ["a", "b", "c"];   // an array of 3 elements, index 0, 1, 2
console.log(arr);

let faang = new Array();  //declare a new instance of an array called faang
faang[0] = "Facebook";
faang[1] = "Amazon";
console.log(faang[0, 1]);  // accessing the value from index poisition [0] from faang
console.log(faang[1]);  // accessing the value from index poisition [1] from faang

let person = {name: "Sam", age: 42}; //create a javascript object with 2 key values pairs (name, age)
console.log ('Name, ${person.name}');
console.log ('Age: , ${person.age}');

let vehicle = new Object(); // Declaring a new Instance of an Object called vehicle
vehicle.name = "Suzuki"; // giving the vehicle object a property called "name" and assigning it a value : "Suzuki"
vehicle.model = "Swift";  // giving the vehicle object a property called "model" and assigning it a value : "Swift"
vehicle.type = "Blue";   // giving the vehicle object a property called "type" and assigning it a value : "Blue"

 let announce = function(){console.log("Hello JS");}; // Declaring a new object "announce()" as a function
 announce();            // invoke and execute the new object "announce()"

 let announce2 = () => {                // declaring a new object announce2" as an ARROW function
    console.log("hello js again");
 }
announce2();                            // Invoke and execute the arrow function "announce2()"

//3. declaring variables using let, const and var
// const is immutable, let is mutable, var is mutable
const PI = 3.14159;                   // declare a mutable variable called PI 
//PI = 3.142;                         // update PI's value because it is mutable
console.log(PI);

// let variables
function greet(){
    let greeting = "welcome FSD learners"
    console.log(greeting);
}
//console.log(greeting); 
greet();

console.log(typeof greet);

// var variable

var localMsg = "Welcome FSD Developers"

function welcome(){
    var localMsg = "Welcome to Full Stack Development";
    console.log(localMsg);
}
console.log(localMsg);

// 4. type casting

// converting values to numbers using the Number object

console.log(Number("3.142"));  //3.142
console.log(Number(Math.PI));  //3.142
console.log(Number("     "));  //0
console.log(Number(""));  //0
console.log(Number("88 88"));  //NaN
console.log(Number("Steve"));  //NaN

// Converting values to strings using the String object
console.log(String(new Date())); // Today's date and time
console.log(String("98765")); // 8765
console.log(String(98765)); // 98765


// converting values into boolean
console.log(Boolean("1")); // true
console.log(Boolean(1)); // true
console.log(Boolean("0")); // true "this is tricky"
console.log(Boolean(0)); // false
console.log(Boolean(" ")); // true  "this is tricky"
console.log(Boolean("")); // false
console.log(Boolean("John")); // true  "this is tricky"

// let's try abit of a trivia using a prompt in the web browser

/* function greetUser(){
    let userName = prompt("please enter your name");

    if (userName){     // what if the user enters a series of spaces, what happens
        alert(`Welcome to FSD ${userName}!!!!!`);

    }
}

greetUser();
 */

function greetUser(){
    let userName = prompt("please enter your name");

    if (userName.trim()){     // what if the user enters a series of spaces, what happens
        alert(`Welcome to FSD ${userName}!!!!!`);
    }else{
        alert("we did not receive your name");
    }

}


greetUser();