// Pseudocode for Rock Paper Scissors project.
// initialize humanScore and computerScore with 0
// write code to get computer's choice
//     create a random whole number between 1 and 3 (inclusive)
//     map 1, 2, 3 to rock, paper, scissors
//     return the choice corresponding to the random number
// write code to get human's choice
    // Prompt user to enter rock, paper, or scissors
        // user input validation?
    // return choice
// write playround function which takes user choice and computer choice as arguments and then console.logs who won and increments the score counters accordingly
// wrap everything in the play game function which plays 5 rounds of the game.
// make sure everything works at each step


function getComputerChoice() {
    // returns rock, paper or scissors based on randomly generated numbers
    let randomNumber = Math.floor((Math.random()*3)+1);
    if (randomNumber == 1)
        return "rock";
    else if (randomNumber == 2)
        return "paper";
    else if (randomNumber == 3)
        return "scissors"
}

