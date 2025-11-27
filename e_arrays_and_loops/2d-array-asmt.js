const array2D =[
    [3, 2, 7],     //row 1
    [2, 9, 5],     //row 2
    [5, 1, 5],     //row 3
];

console.log(array2D);
const element = array2D[1][1];
console.log(element);           


// accessing the elements of an array
// array_name[row][col]
// print all the columns in the first row

const e1 = array2D[0][0];       //first row first element
const e2 = array2D[0][1];       //first row 2nd element
const e3 = array2D[0][2];       //first row 3rd element

console.log(e1, e2, e3);

// printing all the columns in the second row
const e4 = array2D[1][0];       //first row first element
const e5 = array2D[1][1];       //first row 2nd element
const e6 = array2D[1][2];       //first row 3rd element

console.log(e4, e5, e6);


// printing all the columns in the second row
const e7 = array2D[2][0];       //first row first element
const e8 = array2D[2][1];       //first row 2nd element
const e9 = array2D[2][2];       //first row 3rd element

console.log(e7, e8, e9);

const myField = [
  ['░', '░', 'O', '░'],
  ['*', 'O', '░', 'O'],
  ['░', '^', '░', '░'],
];
// console.log(myField);

// i referred to as the row
// j referred to as the column
// dynamic 2d array

const rows = 6;
const cols = 6;
const arr2D = []; //arr2d is a new instance of an array object

// nested for loop (loop inside a loop)
//manage per row
for (let i = 0; i < rows; i++){
    arr2D[i] = []; // create a new instance of an Array (as the row)

// manages the columns per row
    for (let j = 0; j < cols; j++){
            arr2D[i][j] = '░';    
    }
}
console.log(arr2D);

