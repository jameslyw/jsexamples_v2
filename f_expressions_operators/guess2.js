let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase; // as long as the user doesn't enter 'q' AND 'Q', run the loop
//alert(userInput);

while(userInput !=='q'){ 
    
    if(userInput === 10 || userInput === "ten"){      // if the user enters the correct answer, provide an alert
        alert("You are correct!!!");
        break;
    }
    else if(!userInput){                               // if the user puts in an empty string, provide an alert
        userInput = prompt("Your answer is empty, Please enter a value").toLowerCase;
    }
    else {                                              //wrong answer, provide and alert and prompt
        alert("Answer Incorrect.");
        userInput = prompt("Guess the number. Press q or Q to quit").toLowerCase;
    }




// if the user enters a wrong answer, provide an alert


    /*   
    if(userInput == ans || userInput.toLocaleLowerCase() == "ten" ){ // if user's answer is a number 10 OR string literal "ten"
        
        alert("You are correct!!");
        break;
        
    }else if(!userInput){ // else if the user's input is undefined == false (!false == true)
        
        userInput = prompt("Your answer is empty. Please try again."); 
        
    }
    else{
        
        userInput = prompt("Wrong answer. Guess again. Press q or Q to quit.");
        
    } */
}
