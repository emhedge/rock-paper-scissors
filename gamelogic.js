// initial declaration of option variable for getComputerSelection function
const option = ['Rock', 'Paper', 'Scissors'];

// init declaration of scoring and scoring functions
let playerScore = 0;
let computerScore = 0;

// init declaration of scoring elements and content
const divScore = document.querySelector('div#score');
const pScore = document.createElement('p');
const cScore = document.createElement('p');
pScore.textContent = 'Player score: ' + playerScore;
cScore.textContent = 'CPU score: ' + computerScore;


const buttons = document.querySelector('div#selections .selections');

// init declaration of placeholder content to avoid page shifts
const selectionsPlaceholder = document.createElement('p');
selectionsPlaceholder.setAttribute('class', 'placeholder');
selectionsPlaceholder.textContent = "When you're ready, pick your move."

// init declaration of page elements
const divResults = document.querySelector('div#results');
const resultsHeading = document.createElement('h2');
const results = document.createElement('p');
const gameSelections = document.createElement('div');
const playerSideSelection = document.createElement('div');
const computerSideSelection = document.createElement('div');
const playerChoice = document.createElement('p');
const computerChoice = document.createElement('p');
const playerChoiceThumb = document.createElement('img');
const computerChoiceThumb = document.createElement('img');
const footer = document.querySelector('div#footer');

// placeholder text


// append main page nodes and elements
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

playerChoiceThumb.src = './images/player-placeholder.svg';
computerChoiceThumb.src = './images/computer-placeholder.svg';

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
// function for wiping the scoreboard after a win/loss
function wipeScore() {
        playerScore = 0;
        computerScore = 0;
}


// function for computer's random choice
// should introduce the three options
// then make a random choice of the three options
// finally will return the randomOption to playRound()
function getComputerSelection(randomOption, computerSelection) {
        randomOption = Math.floor(Math.random() * option.length);
        computerSelection = (option[randomOption]);
        return(computerSelection);
}

// event listeners receive click, pass playerSelection to 
// playRound() along with getComputerSelection();
// passes corresponding img src to playerChoiceThumb
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

// init declaration to ensure selectionsPlaceholder is removed
// only after the first round;
let playedGames = 0;

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

        resultsHeading.textContent = "Round results: ";

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
        
        // updates player score and selection
        pScore.textContent = 'Player score: ' + playerScore;
        cScore.textContent = 'CPU score: ' + computerScore;
        playerChoice.textContent = "Your selection: " + playerSelection;  
        computerChoice.textContent = "CPU selection: " + computerSelection;
        
        // after reaching 5 games won by player/cpu, resultsHeading.textContent
        // is updated and a game result is announced, then the score is wiped
        // for a new round to begin;
        if (playerScore === 5) {
                resultsHeading.textContent = "Game results:"
                results.textContent = "Hey, not bad! You win.";
                wipeScore();
        } else if (computerScore === 5) {
                resultsHeading.textContent = "Game results:"
                results.textContent = "Oof, you should practice some more. I win.";
                wipeScore();
        }
}  