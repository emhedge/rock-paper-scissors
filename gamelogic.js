// initial declaration of option variable for getComputerSelection function
const option = ['Rock', 'Paper', 'Scissors'];

// init declaration of scoring and scoring functions
let playerScore = 0;
let computerScore = 0;

const divScore = document.querySelector('div#score');
const pScore = document.createElement('p');
const cScore = document.createElement('p');
pScore.textContent = 'Player score: ' + playerScore;
cScore.textContent = 'CPU score: ' + computerScore;

const buttons = document.querySelector('div#selections .selections');

const selectionsPlaceholder = document.createElement('p');
selectionsPlaceholder.setAttribute('class', 'placeholder');
selectionsPlaceholder.textContent = "Pick your sign, then we'll see who wins."

const divResults = document.querySelector('div#results');
const resultsHeading = document.createElement('h2');
const results = document.createElement('p');
const playerChoice = document.createElement('p');
const computerChoice = document.createElement('p');
const playerChoiceThumb = document.createElement('img');
const computerChoiceThumb = document.createElement('img');

const gameSelections = document.createElement('div');
const playerSideSelection = document.createElement('div');
const computerSideSelection = document.createElement('div');

resultsHeading.textContent = 'Round results: ';

divScore.appendChild(pScore);
divScore.appendChild(cScore);

playerSideSelection.appendChild(playerChoice);
playerSideSelection.appendChild(playerChoiceThumb);
computerSideSelection.appendChild(computerChoice);
computerSideSelection.appendChild(computerChoiceThumb);
gameSelections.appendChild(playerSideSelection);
gameSelections.appendChild(computerSideSelection);
divResults.appendChild(selectionsPlaceholder);
divResults.appendChild(gameSelections);
divResults.appendChild(resultsHeading);
divResults.appendChild(results);

pScore.setAttribute('class', 'score');
cScore.setAttribute('class', 'score');
resultsHeading.setAttribute('class', 'resultsHeading')
results.setAttribute('id', 'gameResults')
gameSelections.setAttribute('id', 'gameSelections');
playerSideSelection.setAttribute('id', 'playerSideSelection');
playerChoice.setAttribute('class', 'choiceText');
playerChoiceThumb.setAttribute('class', 'choiceThumb');
computerSideSelection.setAttribute('id', 'computerSideSelection');
computerChoice.setAttribute('class', 'choiceText');
computerChoiceThumb.setAttribute('class', 'choiceThumb');

// function for playerPoint
function playerPoint() {
        playerScore  += 1;
        return(playerScore);
}
// function for computerPoint
function computerPoint() {
        computerScore += 1;
        return(computerScore);
}

function wipeScore() {
        playerScore = 0;
        computerScore = 0;
}


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
        playRound("Rock", getComputerSelection());               
});

btnRock.innerHTML = '<img src="./images/rock.svg" />';
btnRock.addEventListener('click', () => {
        playerChoiceThumb.src = './images/player-rock.svg';               
});

const btnPaper = document.querySelector('#selections #paper');
btnPaper.addEventListener('click', () => {
        playRound("Paper", getComputerSelection());
});

btnPaper.innerHTML = '<img src="./images/paper.svg" />';
btnPaper.addEventListener('click', () => {
        playerChoiceThumb.src = './images/player-paper.svg';               
});

const btnScissors = document.querySelector('#selections #scissors');
btnScissors.addEventListener('click', () => {
        playRound("Scissors", getComputerSelection());
});

btnScissors.innerHTML = '<img src="./images/scissors.svg" />';
btnScissors.addEventListener('click', () => {
        playerChoiceThumb.src = './images/player-scissors.svg';               
});

let playedGames = 0;


        // selectionsPlaceholder.style = ('margin-top', '0px')

// function for a single round
// work through the iterations of rock and alternatives
// then through paper and the alternatives
// then scissors and the alternatives
// not efficient, but it works; can clean it up and streamline later
function playRound(playerSelection, computerSelection) {

        if (playedGames < 1) {
                divResults.removeChild(selectionsPlaceholder);
        } 
        playedGames += 1;

        switch (computerSelection) {
                case 'Rock':
                        computerChoiceThumb.src = './images/computer-rock.svg';
                        break;
                case 'Paper':
                        computerChoiceThumb.src = './images/computer-paper.svg';
                        break;
                case 'Scissors':
                        computerChoiceThumb.src = './images/computer-scissors.svg';
                        break;
        };

        if (playerSelection === "Rock" && computerSelection === "Paper") {
                results.textContent = "You lose! Paper beats Rock!";
                computerPoint();
        }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
                results.textContent = "You win! Rock beats Scissors!";
                playerPoint();
        }   else if (playerSelection === "Rock" && computerSelection === "Rock") {
                results.textContent = "Draw. Try again!";
        }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
                results.textContent = "You lose! Scissors beats Paper!";
                computerPoint();
        }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
                results.textContent = "You win! Paper beats Rock!";
                playerPoint();
        }   else if (playerSelection === "Paper" && computerSelection === "Paper") {
                results.textContent = "Draw. Try again!";
        }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
                results.textContent = "You lose! Rock beats Scissors!";
                computerPoint();
        }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
                results.textContent = "You win! Scissors beats Paper!";
                playerPoint();
        }   else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
                results.textContent = "Draw. Try again!";
        }   else {
                results.textContent = "Oops, that\'s not one of the options. Try again.";
        }    
        playerChoice.textContent = "Your selection: " + playerSelection;  
        computerChoice.textContent = "CPU selection: " + computerSelection;
        


        pScore.textContent = 'Player score: ' + playerScore;
        cScore.textContent = 'CPU score: ' + computerScore;

        
        if (playerScore === 5) {
                resultsHeading.textContent = "Game results:"
                results.textContent = "Hey, not bad! You win.";
                wipeScore();
                console.log('game over');
        } else if (computerScore === 5) {
                resultsHeading.textContent = "Game results:"
                results.textContent = "Oof, maybe you should practice some more. I win.";
                wipeScore();
                console.log('game over');
        }
}  




// next, enclose playRound within game function, call playRound five times, and 
// return the score after each round (playerScore and computerScore variables)
// after 5 rounds, return the overall winner and respective tallies
// function game() {
//         // playerScore = 0;
//         // computerScore = 0;

        
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
