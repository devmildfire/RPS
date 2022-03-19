console.log(`Welcome to the RPS game!`);

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



function computerPlay() {
    const possibleGameMoves = [`rock`, `paper`, `scissors`];
    return possibleGameMoves[ Math.floor(3*Math.random()) ]; 
}



function playerSelection() {
    return prompt(`what is your move? (hint: it's rock, ` + 
        `paper or scissors)`).toLowerCase();
}




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




function game(numberOfRounds) {

    var userScore = 0;
    var computerScore = 0;
    

    for (let i = 0; i < numberOfRounds; i++) {
        
        let [status, message]  = gameRound( playerSelection(), computerPlay() ); 
      

        if (status == 1) {
            computerScore += 1;
        } else if (status == 2) {
            userScore += 1;
        }
        
        alert( message );

    }

    alert( `your score is ${userScore} and computer score is ${computerScore}. 
    You ${userScore < computerScore ? `lose` : `WIN` }`  );

}


// the game will be played for 3 rounds before the total scoring
game(3);