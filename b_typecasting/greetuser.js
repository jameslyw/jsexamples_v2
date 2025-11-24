// let's try abit of a trivia using a prompt the terminal console
// 1. use "    "  in the prompt
// 2. use "James"  in the prompt
// 3. use "" in the prompt

//import prompt-sync library
const prompt = require('prompt-sync')({sigint: true}); // allows CTRL+C to terminate the app

function greetUser(){
    let userName = prompt("please enter your name");

    if (userName.trim()){     // what if the user enters a series of spaces, what happens
        console.log(`Welcome to FSD ${userName}!!!!!`);
    }else{
        console.log("we did not receive your name");
    }

}


greetUser();