console.log(`Welcome to the RPS game!`);

const info = document.getElementById("infoDiv");
const buttons = document.getElementById("buttonsDiv");


const PlayAgain = document.createElement('div');
PlayAgain.setAttribute('id','playAgainDiv');
PlayAgain.classList.add('unselectable');
PlayAgain.innerHTML = `Play Again!`;

const Rock = document.createElement('div');
Rock.setAttribute('id','rockDiv');
Rock.classList.add('unselectable');
Rock.innerHTML = `Rock`;

const Paper = document.createElement('div');
Paper.setAttribute('id','paperDiv');
Paper.classList.add('unselectable');
Paper.innerHTML = `Paper`;

const Scissors = document.createElement('div');
Scissors.setAttribute('id','scissorsDiv');
Scissors.classList.add('unselectable');
Scissors.innerHTML = `Scissors`;

function createButtons(parent_element) {
    parent_element.appendChild(Rock);
    parent_element.appendChild(Paper);
    parent_element.appendChild(Scissors);
};

function removeButtons(parent_element) {
    parent_element.removeChild(Rock);
    parent_element.removeChild(Paper);
    parent_element.removeChild(Scissors);
};

createButtons(buttons);

var userScore = 0;
var computerScore = 0;
const totalRounds = 5;
var currentRound = 1;

// the game asks the user for the input: either a "Rock", "Paper" or "Scissors" 
// move
// the input is stored in the string variable "userMove"
// the game then makes it's own turn, randomly chooses a play and
// stors it in the string variable "gameMove"
// when the game has both moves, it compares them
// if the moves are identical, i.e. both are "paper" the
// game creates a tie output 
// if the moves are not identical, the game takes users move and 
// decides wheather it is a win or a lose depending on the game move

PlayAgain.addEventListener("click", () => {
    createButtons(buttons);
    userScore = 0;
    computerScore = 0;
    currentRound = 1;
    info.innerHTML = `Choose your play!`;
    buttons.removeChild(PlayAgain);
});

Rock.addEventListener("click", () => {
    game(`rock`, currentRound);
});

Paper.addEventListener("click", () => {
    game(`paper`, currentRound);
});

Scissors.addEventListener("click", () => {
    game(`scissors`, currentRound);
});

function computerPlay() {
    const possibleGameMoves = [`rock`, `paper`, `scissors`];
    return possibleGameMoves[ Math.floor(3*Math.random()) ]; 
};


// game round function, takes user move and computer move in the
// current round as input. The output is an array, first item is 0, 1 or 2 - 
// depending on if the outcome is a tie (0), user loss (1) or user win (2)
// and the second item is a string of the corresponding "tie", "lose" or "win"
// message, which will be displayed at the rounds resolution

function gameRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return [0, `That's a tie! Your move is ${playerSelection} and the ` + 
            `game chose ${computerSelection}`] ;
    } else {
        if (playerSelection == `rock` && computerSelection == `paper` ||
            playerSelection == `paper` && computerSelection == `scissors` || 
            playerSelection == `scissors` && computerSelection == `rock`) {
            return [1, `That's a lose! Your move is ${playerSelection} and ` + 
                `the game chose ${computerSelection}`] ;
        } else {
            return [2, `That's a Win! Your move is ${playerSelection} and ` + 
                `the game chose ${computerSelection}` ];
        };
    };

};


// main game function. Takes the number of turns as an input
//  It will call the gameRound function and keep
//score each round adding to the user score if the user won or to the 
//computer score if the compuer won. In case of a tie neither score 
//is updated. In the end of play the final WIN or LOSE condition
//is decided depending on the total of scores

function game(playerSelection, round) {

        let [status, message]  = gameRound( playerSelection, computerPlay() ); 
      

        if (status == 1) {
            computerScore += 1;
        } else if (status == 2) {
            userScore += 1;
        };
        
        // alert( message );
        info.innerHTML = `Round ${round} of ${totalRounds} <br>`;
        info.innerHTML += message + `<br>`; 
        info.innerHTML +=   `your score is ${userScore} and 
                            computer score is ${computerScore}.`; 

        if (round != totalRounds) {
           info.innerHTML += `<br> <br> choose your next play!`;
        } else {
            info.innerHTML +=   `<br><br> <span style="font-size: 30pt">You 
                                ${userScore < computerScore ? `lose` : `WIN` } <span>`;
            removeButtons(buttons);
            buttons.appendChild(PlayAgain);

        };

        currentRound += 1;

};