
let option = ['Rock', 'Paper', 'Scissors'];

// scoring init and scoring functions
let playerScore = 0;
let computerScore = 0;

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


function getComputerSelection(randomOption, computerSelection) {
        randomOption = Math.floor(Math.random() * option.length);
        computerSelection = (option[randomOption]);
        return(computerSelection);
}

function getPlayerSelection(playerSelection) {
        playerSelection = prompt("Rock, Paper, or Scissors! Ready? Shoot!");
        return(playerSelection.toLowerCase());
}

function playRound() {

        let computerSelection = getComputerSelection();
        let playerSelection = getPlayerSelection();


        console.log("Your selection: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase());
        console.log("The computer\'s selection: " + computerSelection);


        if (playerSelection === "rock" && computerSelection === "Paper") {
                console.log("You lose! Paper beats Rock!");
                console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
                return(computerPoint());
        }   else if (playerSelection === "rock" && computerSelection === "Scissors") {
                console.log("You win! Rock beats Scissors!");
                console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
                return(playerPoint());
        }   else if (playerSelection === "rock" && computerSelection === "Rock") {
                console.log("Draw. Try again!");
                console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
        }   else if (playerSelection === "paper" && computerSelection === "Scissors") {
                console.log("You lose! Scissors beats Paper!");
                console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
                return(computerPoint());
        }   else if (playerSelection === "paper" && computerSelection === "Rock") {
                console.log("You win! Paper beats Rock!");
                console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
                return(playerPoint());
        }   else if (playerSelection === "paper" && computerSelection === "Paper") {
                console.log("Draw. Try again!");
                console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
        }   else if (playerSelection === "scissors" && computerSelection === "Rock") {
                console.log("You lose! Rock beats Scissors!");
                console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
                return(computerPoint());
        }   else if (playerSelection === "scissors" && computerSelection === "Paper") {
                console.log("You win! Scissors beats Paper!");
                console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
                return(playerPoint());
        }   else if (playerSelection === "scissors" && computerSelection === "Scissors") {
                console.log("Draw. Try again!");
                console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
        }   else {
                console.log("Oops, that\'s not one of the options. Try again.");
                console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
        }     
        


}  

game();

// console.log(playRound());




// function for computer's random choice
// should introduce the three options
// then make a random choice of the three options
// finally will return the randomOption to console.log


// dead function halfway built trying to ensure case-insensitivity so we can receive anything we want
// function useAnyCase() {
//     if (playerSelection.toLowerCase() == 'rock') {
//         return(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase());
//     }
// }



// function for a single round
// use prompt() to receive playerSelection
// work through the iterations of rock and alternatives
// then through paper and the alternatives
// then scissors and the alternatives



function game() {
        playRound();
        playRound();
        playRound();
        playRound();
        playRound();

        console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
        if (playerScore > computerScore) {
                console.log('Hey, not bad! You beat me.')
        }       else if (computerScore > playerScore) {
                console.log('Ouch, maybe you should practice some more. I win.')
        }       else {
                console.log('Wow, we tied! Care for another game?')
        }

        let playAgain = confirm('Play another 5 games?');

        if (playAgain === true) {

                if (typeof console._commandLineAPI !== 'undefined') {
                        console.API = console._commandLineAPI; //chrome
                    } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
                        console.API = console._inspectorCommandLineAPI; //Safari
                    } else if (typeof console.clear !== 'undefined') {
                        console.API = console;
                    }
                    
                    console.API.clear();

                return(game());
        } else {
                alert('OK, perhaps another time.')
        }


        // playRound();
        // prompt("Rock, Paper, or Scissors! Ready? Shoot!");
        // playRound();
        // prompt("Rock, Paper, or Scissors! Ready? Shoot!");
        // playRound();
}




// let rockLose = (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") => {
//     return("You lose! Paper beats Rock!");
//     // add point for computer
// }



// console.log("Your selection: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase());
// console.log("The computer\'s selection: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));

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