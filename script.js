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

    // Initialize Scores
    let humanScore = 0;
    let computerScore = 0;

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

function getHumanChoice(){
    // returns rock, paper, scissors based on user input
    return prompt(`Enter one of the following:
        Rock
        Paper
        Scissors`);
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    humanChoice = humanChoice.toLowerCase();
    console.log("You have chosen: " + humanChoice + ".");
    console.log("The computer has chosen: " + computerChoice + ".");
    switch (humanChoice) {
        case 'rock':
            switch(computerChoice){
                case 'rock':
                    tie();
                    break;
                case 'paper':
                    computerWins()
                    break;
                case 'scissors':
                    humanWins();
                    break;
                
                }
            break;
        case 'paper':
            switch(computerChoice){
                case 'rock':
                    humanWins();
                    break;
                case 'paper':
                    tie(); 
                    break;
                case 'scissors':
                    computerWins();
                    break;
            }
            break;
        case 'scissors':
            switch(computerChoice){
                case 'rock':
                    computerWins()
                    break;
                case 'paper':
                    humanWins();
                    break;
                case 'scissors':
                    tie();
                    break; 
            }
            break;
        default:
            console.log("You didn't enter one of the options! Try again!");
            playRound();
            break;
        }
    return;
}

function humanWins() {
    console.log("You win!");
    humanScore+=1;
    displayScore();
    return;
}

function computerWins() {
    console.log("Computer wins!");
    computerScore+=1;
    displayScore();
    return;
}

function tie() {
    console.log("It's a tie!")
    displayScore();
    return;
}

function displayScore() {
    console.log(`Scoreboard
        Your Score: ${humanScore}
        Computer Score: ${computerScore}`)
}

function evalScore() {
    console.log("\n");
    if (humanScore > computerScore){
        console.log("You Win the Game!");
    }
    else if (computerScore > humanScore){
        console.log("Computer Wins the Game!");
    } else {
        console.log("It's a tie.")
    }
}

function playGame() {

    humanScore = 0;
    computerScore = 0;

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    evalScore();
}



playGame();