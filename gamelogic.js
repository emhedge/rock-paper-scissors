// initial declaration of option variable for getComputerSelection function
let option = ['Rock', 'Paper', 'Scissors'];



// init declaration of scoring and scoring functions
let playerScore = 0;
let computerScore = 0;

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


// function for obtaining playerSelection
// use prompt() to receive playerSelection
// simply receives text and converts it to lowercase to ensure case insensitivity
// consider converting to uppercase instead? or using localeCompare();
function getPlayerSelection(playerSelection) {
        playerSelection = prompt("Rock, Paper, or Scissors! Ready? Shoot!");
        return(playerSelection.toLowerCase());
}


// function for a single round
// work through the iterations of rock and alternatives
// then through paper and the alternatives
// then scissors and the alternatives
// not efficient, but it works; can clean it up and streamline later
function playRound() {

        let computerSelection = getComputerSelection();
        let playerSelection = getPlayerSelection();


        console.log("Your selection: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase());
        console.log("The computer\'s selection: " + computerSelection);


        if (playerSelection === "rock" && computerSelection === "Paper") {
                console.log("You lose! Paper beats Rock!");
                return(computerPoint());
        }   else if (playerSelection === "rock" && computerSelection === "Scissors") {
                console.log("You win! Rock beats Scissors!");
                return(playerPoint());
        }   else if (playerSelection === "rock" && computerSelection === "Rock") {
                console.log("Draw. Try again!");
        }   else if (playerSelection === "paper" && computerSelection === "Scissors") {
                console.log("You lose! Scissors beats Paper!");
                return(computerPoint());
        }   else if (playerSelection === "paper" && computerSelection === "Rock") {
                console.log("You win! Paper beats Rock!");
                return(playerPoint());
        }   else if (playerSelection === "paper" && computerSelection === "Paper") {
                console.log("Draw. Try again!");
        }   else if (playerSelection === "scissors" && computerSelection === "Rock") {
                console.log("You lose! Rock beats Scissors!");
                return(computerPoint());
        }   else if (playerSelection === "scissors" && computerSelection === "Paper") {
                console.log("You win! Scissors beats Paper!");
                return(playerPoint());
        }   else if (playerSelection === "scissors" && computerSelection === "Scissors") {
                console.log("Draw. Try again!");
        }   else {
                console.log("Oops, that\'s not one of the options. Try again.");
        }     
}  

// next, enclose playRound within game function, call playRound five times, and 
// return the score after each round (playerScore and computerScore variables)
// after 5 rounds, return the overall winner and respective tallies
function game() {
        playerScore = 0;
        computerScore = 0;
        console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
        playRound();
        console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
        playRound();
        console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
        playRound();
        console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
        playRound();
        console.log('Your score: ' + playerScore + '. ' + 'The computer\'s score: ' + computerScore + '.')
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
}


game();
