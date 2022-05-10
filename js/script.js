const rockString = `M179.545 61.07c-1.432-12.116-5.677-21.595-12.617-28.171-6.118-5.798-14.2-8.99-22.759-8.99-.3 0-.601.004-.9.012-6.62-8.525-16.001-13.17-26.782-13.171a40.34 40.34 0 0 0-7.37.694C103.061 4.656 94.586.69 85.849.69a28.83 28.83 0 0 0-14.988 4.219C66.036 1.741 60.236 0 54.187 0c-7.817 0-14.991 2.872-20.2 8.087-5.183 5.19-7.917 12.155-7.907 20.143.012 9.467.035 11.477.058 13.419.019 1.552.035 3.03.046 8.401-7.586 4.057-12.833 10.479-15.265 18.744-3.749 12.739-.764 29.147 9.127 50.162 6.509 13.829 14.323 25.927 18.063 31.443l1.658 22.069c.74 9.854 9.061 17.572 18.941 17.572l78.647-.097c9.489-.012 17.576-7.115 18.812-16.523l3.054-23.263c23.312-36.577 22.777-68.324 20.324-89.087zm-32.074 86.4-3.202 24.39a6.987 6.987 0 0 1-6.928 6.075l-78.623.086h-.01a6.987 6.987 0 0 1-6.976-6.461l-1.759-23.404a6.975 6.975 0 0 0-1.211-3.436C41.564 134.261 1.376 73.239 33.93 59.642c2.585-1.08 4.261-3.629 4.258-6.432-.021-16.603-.087-6.641-.109-24.995-.014-10.925 7.941-16.216 16.107-16.216 4.903 0 9.884 1.909 13.257 5.652 1.085 1.204 2.032 1.697 2.964 1.697 1.399 0 2.762-1.113 4.502-2.601 3.207-2.739 7.052-4.058 10.939-4.058 5.81 0 11.715 2.946 15.725 8.502 1.311 1.815 3.41 2.809 5.588 2.809.612 0 1.23-.078 1.84-.239 2.07-.547 4.66-1.013 7.483-1.013 6.182 0 13.475 2.233 18.845 10.729.955 1.51 2.554 2.826 4.289 2.826.194 0 .392-.016.589-.051a22.8 22.8 0 0 1 3.961-.346c9.792 0 21.069 6.346 23.459 26.568 2.532 21.438 1.933 49.617-19.082 82.098a7.08 7.08 0 0 0-1.074 2.898z`;    
const paperString = `M334.86 69.735c-10.052 0-18.202 8.149-18.202 18.202v79.334c0 4.365-3.923 7.906-8.764 7.906-4.842 0-8.765-3.541-8.765-7.906V54.766c-.015-12.071-9.802-21.851-21.87-21.851-12.083 0-21.875 9.793-21.875 21.873 0 0 .06 112.416 0 112.443v.039c0 4.365-3.698 7.906-8.265 7.906-4.563 0-8.265-3.541-8.265-7.906V23.688C238.843 10.604 228.234 0 215.149 0c-13.097 0-23.711 10.614-23.711 23.711l-.024 144.031c-.246 4.146-3.676 7.436-7.884 7.436a7.907 7.907 0 0 1-7.907-7.906V44.415c0-13.096-10.614-23.71-23.708-23.71-13.096 0-23.711 10.614-23.711 23.71-.219 171.794-.218 171.794-.234 186.019 0 5.369.104 16.905-2.484 18.836-2.149 1.604-5.012-.389-8.477-5.066-7.863-10.617-19.216-27.481-27.484-38.752-7.838-10.686-20.218-22.288-34.271-14.602-13.364 7.311-15.628 26.043-6.591 38.313 0 0 58.548 85.917 78.556 115.788 11.712 17.485 14.854 23.026 18.892 28.771 15.388 21.886 23.975 22.57 48.791 22.57h102.836c55.323 0 55.323-65.667 55.323-93.693V97.943c0-20.059-8.148-28.208-18.201-28.208z`;
const scissorsString = `M26 0a1 1 0 0 0-.357.072c-.922.089-1.766.445-2.358 1.069-.67.707-1.062 1.638-1.265 2.666a1 1 0 0 0-.008.037L19.68 18.617 15.955 6.701l.012.047c-.294-1.128-.77-2.048-1.451-2.709A3.675 3.675 0 0 0 12.016 3 1 1 0 0 0 12 3h-.424c-1.01-.013-2.052.31-2.775 1.105-.723.797-1.012 2.004-.764 3.366a1 1 0 0 0 .014.066l4.8 19.004c-.127.065-.247.108-.376.186-1.334.798-2.797 2.373-3.264 5.043-.339 1.932.038 3.788.305 4.683l.002.004v.004l2.543 8.793C12.988 48.46 16.4 50 19.48 50H32c4.959 0 9-4.041 9-9V30c0-3.794-1.587-6.6-2-7.271V20c0-2.197-1.803-4-4-4-.747 0-1.44.22-2.041.582-.203-1.87-1.718-3.332-3.602-3.51a1 1 0 0 0-.253-.064l.89-8.908A1 1 0 0 0 30 4c0-1.224-.443-2.288-1.201-2.986C28.04.315 27.029 0 26 0zm0 2c.627 0 1.116.185 1.443.486.326.3.55.738.553 1.506l-.953 9.545C25.833 14.227 25 15.516 25 17v7.547l-9.924 1.283s-.137.018-.33.05l-4.74-18.775c-.165-.92.02-1.373.275-1.654.256-.282.695-.459 1.268-.451a1 1 0 0 0 .014 0h.421c.455.007.797.143 1.141.477.344.333.681.903.908 1.775a1 1 0 0 0 .012.047l5 16a1 1 0 0 0 .012.033 1 1 0 0 0 .006.016 1 1 0 0 0 .023.056 1 1 0 0 0 .031.065 1 1 0 0 0 .006.013 1 1 0 0 0 .037.063 1 1 0 0 0 .033.045 1 1 0 0 0 .02.025 1 1 0 0 0 .039.047 1 1 0 0 0 .03.033 1 1 0 0 0 .023.026 1 1 0 0 0 .156.12 1 1 0 0 0 .002.003 1 1 0 0 0 .002 0 1 1 0 0 0 .07.04 1 1 0 0 0 .031.016 1 1 0 0 0 .043.02 1 1 0 0 0 .05.02 1 1 0 0 0 .056.019 1 1 0 0 0 .035.008 1 1 0 0 0 .06.013 1 1 0 0 0 .042.008 1 1 0 0 0 .048.006 1 1 0 0 0 .053.004 1 1 0 0 0 .049.002 1 1 0 0 0 .05-.002 1 1 0 0 0 .05-.004 1 1 0 0 0 .05-.006 1 1 0 0 0 .04-.006 1 1 0 0 0 .078-.02 1 1 0 0 0 .056-.017 1 1 0 0 0 .037-.013 1 1 0 0 0 .02-.01 1 1 0 0 0 .072-.031 1 1 0 0 0 .053-.03 1 1 0 0 0 .008-.006 1 1 0 0 0 .076-.048 1 1 0 0 0 .031-.024 1 1 0 0 0 .047-.039 1 1 0 0 0 .03-.027 1 1 0 0 0 .015-.018 1 1 0 0 0 .047-.053 1 1 0 0 0 .04-.05 1 1 0 0 0 .007-.01 1 1 0 0 0 .033-.045 1 1 0 0 0 .037-.062 1 1 0 0 0 .027-.055 1 1 0 0 0 .006-.016 1 1 0 0 0 .031-.076 1 1 0 0 0 .002-.004 1 1 0 0 0 .02-.068 1 1 0 0 0 .015-.063 1 1 0 0 0 .008-.04l2.996-18.97c.152-.76.427-1.328.752-1.671C25.063 2.17 25.415 2 26 2zm3 13c1.117 0 2 .883 2 2v8.984a4.503 4.503 0 0 0-4-1.691V17c0-1.117.883-2 2-2zm6 3c1.117 0 2 .883 2 2v2.871a1 1 0 0 0 0 .23V27c0 1.117-.883 2-2 2s-2-.883-2-2v-7c0-1.117.883-2 2-2zm-7.61 8.246a2.48 2.48 0 0 1 2.506 1.92c.176.737.091 1.3-.199 1.785-.289.483-.83.93-1.746 1.252l-8.726 2.258a1 1 0 0 0-.627 1.447l1.593 2.924a1 1 0 1 0 1.756-.957l-.98-1.8.232-.061c.505.275 3.966 2.31 4.81 7.158a1 1 0 1 0 1.971-.344c-.652-3.742-2.75-6.141-4.296-7.457l4.843-1.252a1 1 0 0 0 .078-.023c1.25-.437 2.233-1.156 2.81-2.12.272-.455.436-.957.513-1.48a4.05 4.05 0 0 0 2.715 1.432A1 1 0 0 0 35 31a1 1 0 0 0 .361-.074 4.004 4.004 0 0 0 3.463-2.83c.101.602.176 1.23.176 1.904v11c0 3.877-3.123 7-7 7H19.48c-2.403 0-4.901-1.243-5.498-3.303l-2.544-8.8a1 1 0 0 0-.004-.008c-.18-.603-.503-2.342-.252-3.774.372-2.13 1.385-3.112 2.32-3.672.934-.559 1.727-.619 1.727-.619a1 1 0 0 0 .05-.004l11.502-1.488a1 1 0 0 0 .104-.018c.17-.04.339-.062.506-.068z`;

const altRock = `M9.875 1.969c-.534-.014-1.056.268-1.281.718l-1 2.126 2.5 1.093.906-2c.3-.7.006-1.512-.594-1.812a1.448 1.448 0 0 0-.531-.125zm4.188.312c-.535-.037-1.026.194-1.25.719l-1.72 3.188s1.42.706 1.72.906c.4.2.374.906.374.906l2-3.813c.3-.7.107-1.48-.593-1.78a1.624 1.624 0 0 0-.531-.126zM17 4.437c-.44.043-.844.282-1.094.657L13.812 9c-.4.6-.1 1.512.5 1.813.7.4 1.575.2 1.876-.5l2.125-3.907c.4-.6.1-1.512-.5-1.812A1.35 1.35 0 0 0 17 4.437zM7 5.688c-1.1 0-2.106.82-2.406 2.22-.3 1-1.107 3.88-1.407 4.78-.4 1-.087 1.907.313 2.407.2.3 1.112 1.112 1.813 1.812.6.6.78 1.282.78 2.282V22h10.095v-1.594c0-1.3.9-1.118 1.5-2.718.3-.7 1.312-3.375 1.312-3.375-2.6.8-3.412-.926-3.313-2.126-1 .2-2.587-.074-3.187-1.374-.5.5-1.2 1.093-2.5.593l-2.313-1.219c-.44-.157-.596-.663-.656-1.28l3.282 1.593c.8.4 1.693.113 2.093-.688.4-.7.082-1.724-.719-2.124L7.813 5.905a1.72 1.72 0 0 0-.782-.187C7.02 5.71 7.016 5.687 7 5.687zM19.656 7.97c-.534-.038-1.025.193-1.25.718l-1.5 2.813c-.3.7-.106 1.512.594 1.813.7.3 1.512-.026 1.813-.626l1.5-2.78c.3-.7.075-1.513-.625-1.813a1.624 1.624 0 0 0-.532-.125z`;
const altPaper = `M10 2v8H9V3H7v11h.094v.313l-1 .593c-1.1.6-1.388 2.094-.688 3.094l1.907 2.906c.4.7 1.2 1.094 2 1.094H14c2.2 0 4-1.8 4-4V5h-2v5.875l-1-.156V3h-2v7.406l-1-.156V2h-2z`;
const altScissors = `M7.281 6a2.13 2.13 0 0 0-1.25.344L3.094 8.28A2.44 2.44 0 0 0 2 10.312V15a4 4 0 0 0 4 4h4v-1a2 2 0 0 1 2-2v-1c0-.994 1.063-2 2-2h8v-2h-8v-1l7.063-1.031L20.78 7 13 8h-2.375l2.031 5.125-1.469.594a2.65 2.65 0 0 1-3.406-1.406l-.343-.813c-.19.779-.685 1.92-1.907 2.531l-.437-.906c1.417-.708 1.468-2.45 1.468-2.469v-.312l1.22-.563.905 2.156a1.657 1.657 0 0 0 2.126.876l.562-.22-2.219-5.562C8.738 6.367 8.01 6.014 7.281 6zM14 14a1 1 0 0 0-1 1v1h3a1 1 0 0 0 1-1v-1h-3zm-2 3a1 1 0 0 0-1 1v1h3a1 1 0 0 0 1-1v-1h-3z`;

let rockSVG;
let paperSVG;
let scissorsSVG;

let altRockSVG;
let altPaperSVG;
let altScissorsSVG;

let rockSVGtext;
let paperSVGtext;
let scissorsSVGtext;

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
// Rock.innerHTML = `Rock`;

const Paper = document.createElement('div');
Paper.setAttribute('id','paperDiv');
Paper.classList.add('unselectable');
// Paper.innerHTML = `Paper`;

const Scissors = document.createElement('div');
Scissors.setAttribute('id','scissorsDiv');
Scissors.classList.add('unselectable');
// Scissors.innerHTML = `Scissors`;

// const svgDiv = document.createElement('div');
// svgDiv.setAttribute('id','svgDiv');
// svgDiv.classList.add('unselectable');
// svgDiv.innerHTML = ``;

//create a function which will add our play buttons to the parent div
//at the start of he game

function createButtons(parent_element) {
    parent_element.appendChild(Rock);
    parent_element.appendChild(Paper);
    parent_element.appendChild(Scissors);

    addSVG(`scissorsSVG`, Scissors, scissorsString, 
    50, 70, 
    50, 50, `black`, 'scissors', 1, 60, 10); 
    scissorsSVG = Scissors.querySelector(`#scissorsSVG`);
    scissorsSVGtext = scissorsSVG.querySelector(`text`);
    createEvents(scissorsSVG, scissorsSVGtext);

    addSVG(`paperSVG`, Paper, paperString, 
    50, 70,
    420, 420, `black`, 'paper', 50, 480, 110); 
    paperSVG = Paper.querySelector(`#paperSVG`);
    paperSVGtext = paperSVG.querySelector(`text`);
    createEvents(paperSVG, paperSVGtext);

    addSVG(`rockSVG`, Rock, rockString, 
    50, 70, 
    190, 190, `black`, 'rock', 35, 225, 55); 
    rockSVG = Rock.querySelector(`#rockSVG`);
    rockSVGtext = rockSVG.querySelector(`text`);
    createEvents(rockSVG, rockSVGtext);
    
};

function createInfo(parent) {
    parent.innerHTML = ``;
    addSVG(`altRockSvg`, parent, altRock, 
    50, 70, 
    25, 25, `black`, 'altRock', 1, 60, 10); 
    addSVG(`altPaperSvg`, parent, altPaper, 
    50, 70, 
    25, 25, `black`, 'altPaper', 1, 60, 10); 
    addSVG(`altSciccorsSvg`, parent, altScissors, 
    50, 70, 
    25, 25, `black`, 'altScissors', 1, 60, 10); 
};


//create a function which will remove our play buttons from the parent div
//when the game is over

function removeButtons(parent_element) {
    Rock.innerHTML = '';
    parent_element.removeChild(Rock);
    Paper.innerHTML = ``;
    parent_element.removeChild(Paper);
    Scissors.innerHTML = ``;
    parent_element.removeChild(Scissors);
    // svgDiv.innerHTML = '';
    // parent_element.removeChild(svgDiv);
    // let svg_block = document.getElementById('svg_block');
    // parent_element.removeChild(svg_block);
};

createButtons(buttons);
createInfo(info);

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

function addSVG(id, parentNode, pathString, 
    w, h, 
    vBw, vBh, fill, text, text_x, text_y, text_size) {

    const svgns = 'http://www.w3.org/2000/svg';
    const iconSvg = document.createElementNS(svgns, 'svg');
    const iconPath = document.createElementNS(svgns, 'path');
    const iconText = document.createElementNS(svgns, 'text');

    iconSvg.setAttribute('id', id);
    iconSvg.setAttribute('fill', fill);
    iconSvg.setAttribute('viewBox', `0 0 ${vBw.toString()} ${vBh.toString()}`);
    iconSvg.setAttribute('stroke', 'black');
    iconSvg.setAttribute('height', h.toString() );
    iconSvg.setAttribute('width', w.toString() );
    iconSvg.setAttribute( 'pointer-events', 'bounding-box' );

    iconPath.setAttribute( 'd', pathString  );
    iconPath.setAttribute( 'pointer-events', 'none' );
    iconPath.setAttribute('stroke-linecap', 'round');
    iconPath.setAttribute('stroke-linejoin', 'round');
    iconPath.setAttribute('stroke-width', '0');

    
    iconText.setAttribute("x", (text_x).toString() );     
    iconText.setAttribute("y", (text_y).toString() ); 
    iconText.setAttribute("font-size", (text_size).toString() );
    iconText.setAttribute('fill', 'black' );
    iconText.setAttribute('stroke', 'black' );
    iconText.setAttribute('font-family', 'monospace' );
    iconText.setAttribute( 'pointer-events', 'none' );
    iconText.setAttribute( 'opacity', '0' );

    var textNode = document.createTextNode(text);
    iconText.appendChild(textNode);

    iconSvg.appendChild(iconPath);
    iconSvg.appendChild(iconText);

    return parentNode.appendChild(iconSvg);
};


function createEvents(SVG, SVGtext) {

    SVG.addEventListener(`mouseenter`, (event) => {
        // console.log(`ENtered!`);
        TweenMax.to(SVG, 0.5, {scale: 2});
        TweenMax.to(SVGtext, 0.5, {opacity: 1, delay: 0.5});
    });

    SVG.addEventListener(`mouseout`, (event) => {
        // console.log(`Exited!`);
        TweenMax.to(SVG, 0.5, {scale: 1});
        TweenMax.to(SVGtext, 0.5, {opacity: 0, delay: 0.5});
    });

    SVG.addEventListener(`click`, (event) => {
        // console.log(`Exited!`);
        TweenMax.to(SVG, 0.5, {scale: 1});
        TweenMax.to(SVGtext, 0.5, {opacity: 0, delay: 0.5});
    });

};