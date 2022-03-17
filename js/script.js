console.log(`Welcome to the RPS game!`);

// the game asks the user for the input: either a "Rock", "Paper" or "Scissors" move
// the input is stored in the string variable "userMove"
// the game then makes it's own turn, randomly chooses a play and
// stors it in the string variable "gameMove"
// when the game has both moves, it compares them
// if the moves are identical, i.e. both are "paper" the
// game creates a tie output 
// if the moves are not identical, the game takes users move and 
// decides wheather it is a win or a lose depending on the game move

const playerMove = prompt(`what is your move? (hint: it's rock, paper or scissors)`).toLowerCase();

const possibleGameMoves = [`rock`, `paper`, `scissors`];

const gameMove = possibleGameMoves[ Math.floor(3*Math.random()) ]; 

// var win = true;

if (playerMove == gameMove) {
    alert(`your move is ${playerMove} and the game chose ${gameMove}`);
    alert(`that's a tie!`);
} else {
    if (playerMove == `rock` && gameMove == `paper` ||
        playerMove == `paper` && gameMove == `scissors` || 
        playerMove == `scissors` && gameMove == `rock`) {
        // win = false;
        alert(`your move is ${playerMove} and the game chose ${gameMove}`);
        alert(`that's a lose!`);
    } else {
        alert(`your move is ${playerMove} and the game chose ${gameMove}`);
        alert(`that's a Win!`);
    }
}