const prompt = require("prompt-sync")({siginit: true});

/* // 1. while loop
// if a condition is to be checked first, before running a while loop
let getName = "";

while(getName ===""); {                                 //check first
    getName = prompt("Please enter your name: ");       // do later

}
console.log(`Hello ${getName}`);

// 2. do while loop

let getName2 = "";

do{
    getName2 = prompt("Please enter your name: ");      //do first
                                                        //ask later
} while (getName2 ==="");                           
console.log(`Welcome, ${getName2}`); */

// 3. Game input
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

let move ="";

function updateMove(m=""){
        
    if(m===UP) return console.log("you moved up")// tell user he moved up
    if(m===DOWN) return console.log("you moved down")// tell user he moved down
    if(m===LEFT) return console.log("you moved left")      // tell user he moved left
    if(m===RIGHT) return console.log("you moved right")// tell user he moved right
    if(m===QUIT) return console.log("Thanks for playing!")      // tell user he quit the game
    
    console.log("")            //tell user he entered an invalid value
}
do {
    move = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit: ");
    
    switch(move.toLowerCase()){
        case UP:        
            updateMove(UP);
            break;
        case DOWN:      
            updateMove(DOWN);            
            break;
        case LEFT:
            updateMove(LEFT);
            break;
        case RIGHT:     
            updateMove(RIGHT);
            break;
        case QUIT:
            updateMove(QUIT);
            break;
        default:
            updateMove();
    }
}while(move.toLowerCase() !== QUIT);
