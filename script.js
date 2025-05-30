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
let humanScore = 0;
let computerScore = 0;
const choiceDisplay = document.querySelector('#choice');
function displayChoice(humanChoice, computerChoice){
  choiceDisplay.replaceChildren();
  const s1 = document.createElement('span');
  const s2 = document.createElement('span');
  s1.textContent = "You have chosen: " + humanChoice + ".";
  s2.textContent = "The computer has chosen: " + computerChoice + ".";
  choiceDisplay.appendChild(s1);
  choiceDisplay.appendChild(s2);
}
function playRound(humanChoice) {
    // let humanChoice = getHumanChoice();
    // let computerChoice = getComputerChoice();
    let computerChoice = getComputerChoice()
    humanChoice = humanChoice.toLowerCase();
    console.log("You have chosen: " + humanChoice + ".");
    console.log("The computer has chosen: " + computerChoice + ".");
    displayChoice(humanChoice, computerChoice);
    switch (humanChoice) {
      case "rock":
        switch (computerChoice) {
          case "rock":
            tie();
            break;
          case "paper":
            computerWins();
            break;
          case "scissors":
            humanWins();
            break;
        }
        break;
      case "paper":
        switch (computerChoice) {
          case "rock":
            humanWins();
            break;
          case "paper":
            tie();
            break;
          case "scissors":
            computerWins();
            break;
        }
        break;
      case "scissors":
        switch (computerChoice) {
          case "rock":
            computerWins();
            break;
          case "paper":
            humanWins();
            break;
          case "scissors":
            tie();
            break;
        }
        break;
      default:
        console.log("You didn't enter one of the options! Try again!");
        playRound();
        break;
    }
    evalScore();
    function displayScore() {
      console.log(`Scoreboard
      Your Score: ${humanScore}
      Computer Score: ${computerScore}`);
      const score = document.querySelector('#score');
      score.replaceChildren();
      const heading = document.createElement('h3');
      heading.textContent = 'Scoreboard'
      score.appendChild(heading);
      const hscore = document.createElement('span');
      const cscore = document.createElement('span');
      hscore.textContent =`Your Score: ${humanScore}`;
      cscore.textContent =`Computer's Score: ${computerScore}`;
      score.appendChild(hscore);
      score.appendChild(cscore);
    }
    
    function getComputerChoice() {
      // returns rock, paper or scissors based on randomly generated numbers
      let randomNumber = Math.floor(Math.random() * 3 + 1);
      if (randomNumber == 1) return "rock";
      else if (randomNumber == 2) return "paper";
      else if (randomNumber == 3) return "scissors";
    }
    
    function humanWins() {
      console.log("You win!");
      humanScore += 1;
      displayScore();
      return;
    }
    
    function computerWins() {
      console.log("Computer wins!");
      computerScore += 1;
      displayScore();
      return;
    }
    
    function tie() {
      console.log("It's a tie!");
      displayScore();
      return;
    }
    
    function evalScore() {
      console.log("\n");
      if (humanScore === 5) {
        console.log("You Win the Game!");
        const theStuff = document.querySelector('body');
        theStuff.replaceChildren();
        const win = document.createElement('h1');
        win.textContent = "YOU WIN!";
        theStuff.appendChild(win);
        const playAgain = document.createElement('button');
        playAgain.textContent = 'Play Again?';
        playAgain.addEventListener('click',(e)=>{
          location.reload();
        });
        theStuff.appendChild(playAgain);
      } else if (computerScore === 5) {
        console.log("Computer Wins the Game!");
        const stuff = document.querySelector('body');
        stuff.replaceChildren();
        const lose = document.createElement('h1');
        lose.textContent = "YOU LOSE!";
        stuff.appendChild(lose);
        const playAgain = document.createElement('button');
        playAgain.textContent = 'Play Again?';
        playAgain.addEventListener('click',(e)=>{
          location.reload();
        });
        stuff.appendChild(playAgain);
      }
    }
    return;
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click',(e) => {
  playRound('rock');
});
paper.addEventListener('click',(e) => {
  playRound('paper');
});
scissors.addEventListener('click',(e) => {
  playRound('scissors');
});