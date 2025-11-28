// 1. trim a string
let wordWithTrim = "   FSD   "
console.log(`"${wordWithTrim.trim()}"`);
console.log(`"${wordWithTrim.trimStart()}"`);
console.log(`"${wordWithTrim.trimEnd()}"`);

// 2. toString (convert a number to a string)
let statusCode = 404; // number
let statusCode2 = "404"; // string
console.log(typeof statusCode.toString());
console.log(typeof String(statusCode).toString());

// 3. Typecast boolean data type to a string
let boolVal = true; // a boolean does not have a toString Method
console.log(typeof String(boolVal).toString); // how to convert to string

// 4. Splitting a string

let fullName = "John Doe";
let splitName = fullName.split(" "); // what type is returned?
console.log(splitName.length);
console.log(`Welcome ${splitName[0]} ${splitName[1]}, to our site!`);

// 5. split a string and obtain the string by X elements
let sentence = "hello world JS coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);

let splitWordIndex0 = splitInstances[0].split("");
console.log(splitWordIndex0);

// 6. slidate the string based on today's date and render a custom 
const currDate = Date.now();
const today = new Date(currDate);   // new instance of date
console.log(today.toDateString());  //
let splitToday = today.toDateString(); //
splitToday = splitToday.split(" ");  //
console.log(splitToday);    //

let msg = "";

switch(splitToday[0]){
    case "Mon":
        msg = "Monday blues";
        break;
    case "Tue":
    case "Wed":
    case "Thu":
        msg = "Work, Work!";
        break;
    case "Fri":
        msg = "TGIF";
        break;
    default:
        msg = "It's the weekend!";
}

console.log(msg);