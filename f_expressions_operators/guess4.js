let ans = 10;
let ansString = "ten";
let str = "";
const answerLookup = {                                      // answer lookup table
    "one" : 1,
    "two": 2,
    "three": 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "forteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
};
 
const feedbackGuess = "Guess the number";
const feedbackQuit = "Press q or Q to quit"
const feedbackCorrect = "your answer is correct";
const feedbackWrong = "your answer is wrong.";
const feedbackTooHigh = "Lower number please, try again.";
const feedbackTooLow = "Higher number please, try again.";
const feedbackEmpty = "your answer is blank"

let userInput = prompt(feedbackGuess.concat(" ", feedbackQuit)).toLowerCase(); // as long as the user doesn't enter 'q' AND 'Q', run the loop
/* if (userInput = "");
    function convertStringToNumber(str) {
        return Number(str);
}
// function to evaluate string answer */


function evaluateStringAnswer(userInput){
    return answerLookup[userInput] === ans;
}

while(userInput !=='q'){ 
    
    let correctAns = false;
    let feedback = "";

    switch(true){
        case (Number(userInput) === ans || text2num(userInput) === ans ):  // answer is correct
            feedback = feedbackCorrect;
            correctAns = true;
            break;

        case (!userInput): // answer is incorrect
            feedback = feedbackEmpty;
            correctAns = false;
            break;

        case (Number(userInput) > ans || text2num(userInput) === ans): // answer is too high
            feedback = feedbackTooHigh;
            correctAns = false;
            break;

        case (Number(userInput) < ans || text2num(userInput) === ans): // answer is too low
            feedback = feedbackTooLow;
            correctAns = false;
            break;

        default:
            feedback = feedbackWrong;  // answer is wrong
            correctAns = false;            
    }

    alert(feedback);
    // prepare the feedback to the user
    if(correctAns){
        break;       
    }

    userInput = prompt(feedbackGuess.concat(" ", feedbackQuit)).toLowerCase();
}

