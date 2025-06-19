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



// init declaration of page elements
const divResults = document.querySelector('div#results');
const resultsHeading = document.createElement('h2');
const results = document.createElement('p');
const callToAction = document.createElement('p');
const gameSelections = document.createElement('div');
const playerSideSelection = document.createElement('div');
const computerSideSelection = document.createElement('div');
const playerChoice = document.createElement('p');
const computerChoice = document.createElement('p');
const playerChoiceThumb = document.createElement('img');
const computerChoiceThumb = document.createElement('img');
const footer = document.querySelector('div#footer');

// init declaration of placeholder content to avoid page shifts
const selectionsPlaceholder = document.createElement('p');
selectionsPlaceholder.setAttribute('class', 'placeholder');
selectionsPlaceholder.textContent = "When you're ready, pick your move."

// set class and IDs
pScore.setAttribute('class', 'score');
cScore.setAttribute('class', 'score');
resultsHeading.setAttribute('class', 'resultsHeading')
results.setAttribute('class', 'gameResults')
// callToAction.setAttribute('class', 'gameResults')
callToAction.setAttribute('class', 'callToAction')
gameSelections.setAttribute('id', 'gameSelections');
playerSideSelection.setAttribute('id', 'playerSideSelection');
playerChoice.setAttribute('class', 'choiceText');
playerChoiceThumb.setAttribute('class', 'choiceThumb');
computerSideSelection.setAttribute('id', 'computerSideSelection');
computerChoice.setAttribute('class', 'choiceText');
computerChoiceThumb.setAttribute('class', 'choiceThumb');

// append main page nodes and elements
divScore.appendChild(pScore);
divScore.appendChild(cScore);
playerSideSelection.appendChild(playerChoice);
playerSideSelection.appendChild(playerChoiceThumb);
computerSideSelection.appendChild(computerChoice);
computerSideSelection.appendChild(computerChoiceThumb);
gameSelections.appendChild(playerSideSelection);
gameSelections.appendChild(computerSideSelection);
divResults.appendChild(gameSelections);
divResults.appendChild(resultsHeading);
divResults.appendChild(selectionsPlaceholder);
divResults.appendChild(results);
divResults.appendChild(callToAction);

// placeholder img srcs
playerChoiceThumb.src = './images/player-placeholder.svg';
computerChoiceThumb.src = './images/computer-placeholder.svg';

// preload playerChoiceThumb and computerChoiceThumb srcs
let images = [];
function preload() {
    for (let i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
// playerChoiceThumbs
    "./images/player-rock.svg",
    "./images/player-paper.svg",
    "./images/player-scissors.svg",
// computerChoiceThumbs
    "./images/computer-rock.svg",
    "./images/computer-paper.svg",
    "./images/computer-scissors.svg",
// game over computerChoiceThumbs
    './images/computer-scissors-win.svg',
    './images/computer-scissors-lose.svg',
    "./images/computer-rock-win.svg",
    "./images/computer-rock-lose.svg",
    "./images/computer-paper-win.svg",
    "./images/computer-paper-lose.svg",
// game over playerChoiceThumbs
    './images/player-scissors-win.svg',
    './images/player-scissors-lose.svg',
    "./images/player-rock-win.svg",
    "./images/player-rock-lose.svg",
    "./images/player-paper-win.svg",
    "./images/player-paper-lose.svg",
    
)

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
btnRock.innerHTML = '<img src="./images/rock.svg" />';

btnRock.addEventListener('click', () => {
        playerChoiceThumb.src = './images/player-rock.svg';
        playRound("Rock", getComputerSelection());               
});

const btnPaper = document.querySelector('#selections #paper');
btnPaper.innerHTML = '<img src="./images/paper.svg" />';
btnPaper.addEventListener('click', () => {
        playerChoiceThumb.src = './images/player-paper.svg';               
        playRound("Paper", getComputerSelection());
});

const btnScissors = document.querySelector('#selections #scissors');
btnScissors.innerHTML = '<img src="./images/scissors.svg" />';
btnScissors.addEventListener('click', () => {
        playerChoiceThumb.src = './images/player-scissors.svg';               
        playRound("Scissors", getComputerSelection());
});

// debugging function to save mouse clicks
document.addEventListener('keydown', function(event) {
        switch (event.key) {
                case '1':
                        btnRock.click();
                        break;
                case '2':
                        btnPaper.click();
                        break;
                case '3':
                        btnScissors.click();
                        break;
                default:
                        break;
        }
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

        function highlightScore(whoScored) {
                if (whoScored === "computer") {
                        cScore.classList.add("highlight");
                        setTimeout(() => {
                                cScore.classList.remove("highlight");
                                }, 300);
                } else if (whoScored === "player") {
                        pScore.classList.add("highlight");
                        setTimeout(() => {
                                pScore.classList.remove("highlight");
                                }, 300);
                                      
                }
        }

        function loadEndGamePic(playerWon, computerWon) {
                if (playerWon) {
                        switch(playerSelection) {
                                case 'Rock':
                                        playerChoiceThumb.src = "./images/player-rock-win.svg";
                                        break;
                                case 'Paper':
                                        playerChoiceThumb.src = "./images/player-paper-win.svg";
                                        break;
                                case 'Scissors':
                                        playerChoiceThumb.src = './images/player-scissors-win.svg';
                                        break;
                        };
                        switch(computerSelection) {
                                case 'Rock':
                                        computerChoiceThumb.src =  "./images/computer-rock-lose.svg";
                                        break;
                                case 'Paper':
                                        computerChoiceThumb.src = "./images/computer-paper-lose.svg";
                                        break;
                                case 'Scissors':
                                        computerChoiceThumb.src = './images/computer-scissors-lose.svg';
                                        break;
                        };

                }
                if (computerWon) {
                        switch(playerSelection) {
                                case 'Rock':
                                        playerChoiceThumb.src = "./images/player-rock-lose.svg";
                                        break;
                                case 'Paper':
                                        playerChoiceThumb.src = "./images/player-paper-lose.svg";
                                        break;
                                case 'Scissors':
                                        playerChoiceThumb.src = './images/player-scissors-lose.svg';
                                        break;
                        };
                        switch(computerSelection) {
                                case 'Rock':
                                        computerChoiceThumb.src =  "./images/computer-rock-win.svg";
                                        break;
                                case 'Paper':
                                        computerChoiceThumb.src = "./images/computer-paper-win.svg";
                                        break;
                                case 'Scissors':
                                        computerChoiceThumb.src = './images/computer-scissors-win.svg';
                                        break;
                        };

                }
        }

        if (playerSelection === "Rock" && computerSelection === "Paper") {
                results.textContent = "You lose! Paper beats Rock!";
                computerPoint();
                highlightScore("computer");
        }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
                results.textContent = "You win! Rock beats Scissors!";
                playerPoint();
                highlightScore("player");
        }   else if (playerSelection === "Rock" && computerSelection === "Rock") {
                results.textContent = "Draw. Try again!";
        }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
                results.textContent = "You lose! Scissors beats Paper!";
                computerPoint();
                highlightScore("computer");
        }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
                results.textContent = "You win! Paper beats Rock!";
                playerPoint();
                highlightScore("player");
        }   else if (playerSelection === "Paper" && computerSelection === "Paper") {
                results.textContent = "Draw. Try again!";
        }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
                results.textContent = "You lose! Rock beats Scissors!";
                computerPoint();
                highlightScore("computer");
        }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
                results.textContent = "You win! Scissors beats Paper!";
                playerPoint();
                highlightScore("player");
        }   else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
                results.textContent = "Draw. Try again!";
        }   else {
                results.textContent = "Oops, that\'s not one of the options. Try again.";
        }
        

        // function gameOverPopup() {
                
        // }



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
                callToAction.textContent = "Pick your next move to start a new game."
                // computerChoiceThumb.src = './images/computer-scissors-lose.svg';
                // playerChoiceThumb.src = './images/player-scissors-win.svg';
                loadEndGamePic({playerWon: true, computerWon: false});
                wipeScore();
        } else if (computerScore === 5) {
                resultsHeading.textContent = "Game results:"
                results.textContent = "Oof, you should practice some more. I win.";
                callToAction.textContent = "Pick your next move to start a new game."
                // playerChoiceThumb.src = './images/player-scissors-lose.svg';
                // computerChoiceThumb.src = './images/computer-scissors-win.svg';
                loadEndGamePic({playerWon: true, computerWon: false});
                wipeScore();
        }
}  