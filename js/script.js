const info = document.getElementById("infoDiv");
const buttons = document.getElementById("buttonsDiv");

//create 4 div elements which shall be used as buttons:
//PlayAgain, Rock, Paper and Scissors

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


//create a function which will add our play buttons to the parent div
//at the start of he game

function createButtons(parent_element) {
    parent_element.appendChild(Rock);
    parent_element.appendChild(Paper);
    parent_element.appendChild(Scissors);
};


//create a function which will remove our play buttons from the parent div
//when the game is over

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

// the user can make his choice: either a "Rock", "Paper" or "Scissors" 
// by clicking on one of three butons. EventListener functions above
// call the Game function, which in turn calls gameRound function.
// gameRound function takes the input of a player, and a random input 
// of a function computerPlay to return the current round results: the oucome in
// the form of a number (from 0 to 2) and a text message to display.
// after that the Game function updates the global variables which track the 
// overall game progress - current round number and scores of both player and computer
// on the last round the total score is tallied and the end game resut is presented
// at this stage the 3 buttons are removed and a PlayAgain buton appears


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