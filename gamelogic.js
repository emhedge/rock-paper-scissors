// initial declaration of option variable for getComputerSelection function
const option = ['Rock', 'Paper', 'Scissors'];

// init declaration of scoring and scoring functions
let playerScore = 0;
let computerScore = 0;

const divResults = document.querySelector('div#results');
const resultsHeading = document.querySelector('#results p');
resultsHeading.textContent = 'Results: ';

const buttons = document.querySelector('div#selections');

const results = document.createElement('p');
const playerChoice = document.createElement('p');
const computerChoice = document.createElement('p');

results.textContent = '';
divResults.appendChild(playerChoice);
divResults.appendChild(computerChoice);
divResults.appendChild(results);

const divScore = document.querySelector('div#score');
const pScore = document.createElement('p');
const cScore = document.createElement('p');
pScore.textContent = 'Player score: ' + playerScore;
cScore.textContent = 'Computer score: ' + computerScore;

divScore.appendChild(pScore);
divScore.appendChild(cScore);

// functions for game(playerPoint, computerPoint) {
// playerPoint = a means of increasing score if player wins;
// computerPoint = a means of increasing score if computer wins;

// function for playerPoint
function playerPoint() {
        playerScore++;
        return(playerScore);
}
// function for computerPoint
function computerPoint() {
        computerScore++;
        return(computerScore);
}


// functions for obtaining computer and player selections

// function for computer's random choice
// should introduce the three options
// then make a random choice of the three options
// finally will return the randomOption to console.log
function getComputerSelection(randomOption, computerSelection) {
        randomOption = Math.floor(Math.random() * option.length);
        computerSelection = (option[randomOption]);
        return(computerSelection);
}



// const buttons = document.getElementsByClassName('.selections');

// const div1 = document.createElement('div');
// function getPlayerSelection() {

        
        const btnRock = document.querySelector('#selections #rock');
        btnRock.addEventListener('click', () => {
                playRound("rock", getComputerSelection());               
        });


        const btnPaper = document.querySelector('#selections #paper');
        btnPaper.addEventListener('click', () => {
                playRound("paper", getComputerSelection());
        });


        const btnScissors = document.querySelector('#selections #scissors');
        btnScissors.addEventListener('click', () => {
                playRound("scissors", getComputerSelection());
        });



// function for a single round
// work through the iterations of rock and alternatives
// then through paper and the alternatives
// then scissors and the alternatives
// not efficient, but it works; can clean it up and streamline later
function playRound(playerSelection, computerSelection) {
        // let playerSelection = getPlayerSelection();
        // let computerSelection = getComputerSelection();

        // console.log("your selection: " + playerSelection);
        // results.textContent = "Your selection: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        // results.textContent = "The computer\'s selection: " + computerSelection;
        
        

        // playerChoice.textContent = "Your selection: " + playerSelection;  
        computerChoice.textContent = "The computer\'s selection: " + computerSelection;


        playerChoice.textContent = "Your selection: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        
        // to achieve best of five games logic, consider changing it to computerPoint += 1 and returning 1 if game played and 0 if tied

        if (playerSelection === "rock" && computerSelection === "Paper") {
                results.textContent = "You lose! Paper beats Rock!";
                return(computerPoint());
        }   else if (playerSelection === "rock" && computerSelection === "Scissors") {
                results.textContent = "You win! Rock beats Scissors!";
                return(playerPoint()); 
        }   else if (playerSelection === "rock" && computerSelection === "Rock") {
                results.textContent = "Draw. Try again!";
        }   else if (playerSelection === "paper" && computerSelection === "Scissors") {
                results.textContent = "You lose! Scissors beats Paper!";
                return(computerPoint());
        }   else if (playerSelection === "paper" && computerSelection === "Rock") {
                results.textContent = "You win! Paper beats Rock!";
                return(playerPoint());
        }   else if (playerSelection === "paper" && computerSelection === "Paper") {
                results.textContent = "Draw. Try again!";
        }   else if (playerSelection === "scissors" && computerSelection === "Rock") {
                results.textContent = "You lose! Rock beats Scissors!";
                return(computerPoint());
        }   else if (playerSelection === "scissors" && computerSelection === "Paper") {
                results.textContent = "You win! Scissors beats Paper!";
                return(playerPoint());
        }   else if (playerSelection === "scissors" && computerSelection === "Scissors") {
                results.textContent = "Draw. Try again!";
        }   else {
                results.textContent = "Oops, that\'s not one of the options. Try again.";
        }    
}  



// next, enclose playRound within game function, call playRound five times, and 
// return the score after each round (playerScore and computerScore variables)
// after 5 rounds, return the overall winner and respective tallies
// function game() {
//         playerScore = 0;
//         computerScore = 0;
//         console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
//         playRound();
//         console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
//         playRound();
//         console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
//         playRound();
//         console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
//         playRound();
//         console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
//         playRound();

//         console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
//         if (playerScore > computerScore) {
//                 console.log('Hey, not bad! You beat me.')
//         }       else if (computerScore > playerScore) {
//                 console.log('Ouch, maybe you should practice some more. I win.')
//         }       else {
//                 console.log('Wow, we tied! Care for another game?')
//         }

//         let playAgain = confirm('Play again?');

//         if (playAgain === true) {

//                 if (typeof console._commandLineAPI !== 'undefined') {
//                         console.API = console._commandLineAPI; //chrome
//                     } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
//                         console.API = console._inspectorCommandLineAPI; //Safari
//                     } else if (typeof console.clear !== 'undefined') {
//                         console.API = console;
//                     }
                    
//                     console.API.clear();

//                 return(game());
//         } else {
//                 alert('OK, perhaps another time.')
//         }
// }


// playRound();
