
// function for computer's random choice
// should introduce the three options
// then make a random choice of the three options
// finally will return the randomOption to console.log

function getComputerChoice() {
    let option = ['Rock', 'Paper', 'Scissors'];
    let randomOption = Math.floor(Math.random() * option.length);
    return(option[randomOption]);
}

// create a function to ensure case-insensitivity so we can receive anything we want
function cleanText() {
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase;
}


// function for a single round
// use prompt() to receive playerSelection
// work through the iterations of rock and alternatives
// then through paper and the alternatives
// then scissors and the alternatives

function playRound(playerSelection, computerSelection) {
    cleanText(playerSelection);

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return("You lose! Paper beats Rock!");
    }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return("You win! Rock beats Scissors!");
    }   else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return("Draw. Try again!");
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return("You lose! Scissors beats Paper!");
    }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return("You win! Paper beats Rock!");
    }   else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return("Draw. Try again!");
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return("You lose! Rock beats Scissors!");
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return("You win! Scissors beats Paper!");
    }   else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return("Draw. Try again!");
    }   else {
        return("Oops, that\'s not one of the options. Try again.");
    }
}   

// playRound();

const playerSelection = prompt("Rock, Paper, or Scissors! Ready? Shoot!");
const computerSelection = getComputerChoice();
console.log("Your selection: " + playerSelection);
console.log("The computer\'s selection: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));

// next, enclose playRound within game function, call playRound five times, and 
// return the score after each round (playerScore and computerScore variables)
// after 5 rounds, return the overall winner and respective tallies

// function game(playerScore, computerScore) {
// playerScore = a means of increasing score if player wins;
// computerScore = a means of increasing score if player wins;

// playRound(playerSelection, computerSelection);
// console.log(return the score in a string);
// playRound(playerSelection, computerSelection);
// console.log(return the score in a string);
// playRound(playerSelection, computerSelection);
// console.log(return the score in a string);
// playRound(playerSelection, computerSelection);
// console.log(return the score in a string);
// playRound(playerSelection, computerSelection);
// console.log(return the score in a string and pronounce the winner);
// }