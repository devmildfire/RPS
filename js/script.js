console.log(`Welcome to the RPS game!`);

const Rock = document.getElementById("rockDiv");
const Paper = document.getElementById("paperDiv");
const Scissors = document.getElementById("scissorsDiv");
const info = document.getElementById("infoDiv");

var userScore = 0;
var computerScore = 0;

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

Rock.addEventListener("click", () => {
    game(`rock`);
});

Paper.addEventListener("click", () => {
    game(`paper`);
});

Scissors.addEventListener("click", () => {
    game(`scissors`);
});

function computerPlay() {
    const possibleGameMoves = [`rock`, `paper`, `scissors`];
    return possibleGameMoves[ Math.floor(3*Math.random()) ]; 
}



function playerSelection() {
    return prompt(`what is your move? (hint: it's rock, ` + 
        `paper or scissors)`).toLowerCase();
}


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
        }
    }

}


// main game function. Takes the number of turns as an input
//  It will call the gameRound function and keep
//score each round adding to the user score if the user won or to the 
//computer score if the compuer won. In case of a tie neither score 
//is updated. In the end of play the final WIN or LOSE condition
//is decided depending on the total of scores

function game(playerSelection) {

    // for (let i = 0; i < numberOfRounds; i++) 
    
    // {

        
        let [status, message]  = gameRound( playerSelection, computerPlay() ); 
      

        if (status == 1) {
            computerScore += 1;
        } else if (status == 2) {
            userScore += 1;
        };
        
        // alert( message );
        info.innerHTML = message + `<br>`; 
        info.innerHTML += `your score is ${userScore} and computer score is ${computerScore}. 
        You ${userScore < computerScore ? `lose` : `WIN` }` ; 

    // }

    // alert(  );

}


// the game will be played for 3 rounds before the total scoring
// game(3);