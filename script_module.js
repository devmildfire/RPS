const body = document.querySelector('body');

let svgCirclePath;
let playButton;
let svgs;

let contDiv;
let cpuDiv;
let battleDiv;

let allSVGs;

const scoreToWin = 5;

const dt = 0.3;
const lapTime = dt*70;

const svgSize = 60;
const cpuSize = svgSize*2;
const circleSize = 150;

const circleR = circleSize/2;
const k = Math.sqrt(3);
const triSide = circleR*k;

let gameState = {
    playerScore: 0,
    cpuScore: 0,
    numberOfRounds: 5,
    currentRound: 0
}


function createGameField() {
    contDiv = document.createElement('div');
    cpuDiv = document.createElement('div');
    battleDiv = document.createElement('div');
    // contDiv.style.height = Math.min(winWidth, winHeight);
    // contDiv.style.width = contDiv.height;
    // contDiv.setAttribute("style","width:200px; height:300px");
    
    contDiv.setAttribute('id', 'contDiv');
    cpuDiv.setAttribute('id', 'cpuDiv');
    battleDiv.setAttribute('id', 'battleDiv');
    
    body.appendChild(cpuDiv);
    body.appendChild(battleDiv);
    battleDiv.style.zIndex -= 1;
    body.appendChild(contDiv);
};


function makeSVG( name, parent, boxDim, H, W, Image, circleFill, circleStrokeW, pathFill, sw, pathOrText, addedText) {
    
    const svgns = 'http://www.w3.org/2000/svg';
    const Svg = document.createElementNS(svgns, 'svg');
    gsap.set(Svg, { attr: { id: name,
                            height: H,
                            width: W,
                            viewBox: boxDim,
                            'fill': 'none',
                            'stroke': 'black',
                            'pointer-events':'none'  } });

    const imageCircle = document.createElementNS(svgns, 'circle');
    gsap.set( imageCircle, { attr: {    id: name + 'Circle', 
                                        r: boxDim[2]*0.95/2,
                                        'stroke': 'black',
                                        'stroke-width': circleStrokeW,
                                        'fill': circleFill,
                                        cx: boxDim[2]/2 + boxDim[0],
                                        cy: boxDim[2]/2 + boxDim[0],
                                        'pointer-events':'none' 
                                    } } );
    Svg.appendChild(imageCircle);

    if (pathOrText === `path`) {
        const imagePath = document.createElementNS(svgns, 'path');
        gsap.set(imagePath, { attr: {   id: name + 'Path', 
                                        d: Image,
                                        fill: pathFill,
                                        'stroke-linecap': 'round',
                                        'stroke-linejoin': 'round',
                                        'stroke-width': sw,
                                        'pointer-events':'none'   }  } );
        
    
        Svg.appendChild(imagePath);
    };
    
    if (pathOrText === `text` && addedText) {
        const imageText = document.createElementNS(svgns, 'text');
        gsap.set(imageText, { attr: {   id: name + `Text`,
                                        x: '50%',
                                        y: '50%',
                                        'dominant-baseline': 'middle',
                                        'text-anchor': 'middle',
                                        class: `playText`,
                                        'fill': 'white',
                                        'stroke': 'white',
                                        'pointer-events':'none'
                                    } });
        imageText.innerHTML = addedText;
        Svg.appendChild(imageText);
    };
    
    parent.appendChild( Svg );
    eval(name + ` = Svg`);
};


function createSVGs (parent_1, parent_2, parent_3) {

    const svgns = 'http://www.w3.org/2000/svg';

    const rockString = `M9.875 1.969c-.534-.014-1.056.268-1.281.718l-1 2.126 2.5 1.093.906-2c.3-.7.006-1.512-.594-1.812a1.448 1.448 0 0 0-.531-.125zm4.188.312c-.535-.037-1.026.194-1.25.719l-1.72 3.188s1.42.706 1.72.906c.4.2.374.906.374.906l2-3.813c.3-.7.107-1.48-.593-1.78a1.624 1.624 0 0 0-.531-.126zM17 4.437c-.44.043-.844.282-1.094.657L13.812 9c-.4.6-.1 1.512.5 1.813.7.4 1.575.2 1.876-.5l2.125-3.907c.4-.6.1-1.512-.5-1.812A1.35 1.35 0 0 0 17 4.437zM7 5.688c-1.1 0-2.106.82-2.406 2.22-.3 1-1.107 3.88-1.407 4.78-.4 1-.087 1.907.313 2.407.2.3 1.112 1.112 1.813 1.812.6.6.78 1.282.78 2.282V22h10.095v-1.594c0-1.3.9-1.118 1.5-2.718.3-.7 1.312-3.375 1.312-3.375-2.6.8-3.412-.926-3.313-2.126-1 .2-2.587-.074-3.187-1.374-.5.5-1.2 1.093-2.5.593l-2.313-1.219c-.44-.157-.596-.663-.656-1.28l3.282 1.593c.8.4 1.693.113 2.093-.688.4-.7.082-1.724-.719-2.124L7.813 5.905a1.72 1.72 0 0 0-.782-.187C7.02 5.71 7.016 5.687 7 5.687zM19.656 7.97c-.534-.038-1.025.193-1.25.718l-1.5 2.813c-.3.7-.106 1.512.594 1.813.7.3 1.512-.026 1.813-.626l1.5-2.78c.3-.7.075-1.513-.625-1.813a1.624 1.624 0 0 0-.532-.125z`;
    const paperString = `M10 2v8H9V3H7v11h.094v.313l-1 .593c-1.1.6-1.388 2.094-.688 3.094l1.907 2.906c.4.7 1.2 1.094 2 1.094H14c2.2 0 4-1.8 4-4V5h-2v5.875l-1-.156V3h-2v7.406l-1-.156V2h-2z`;
    const scissorsString = `M7.281 6a2.13 2.13 0 0 0-1.25.344L3.094 8.28A2.44 2.44 0 0 0 2 10.312V15a4 4 0 0 0 4 4h4v-1a2 2 0 0 1 2-2v-1c0-.994 1.063-2 2-2h8v-2h-8v-1l7.063-1.031L20.78 7 13 8h-2.375l2.031 5.125-1.469.594a2.65 2.65 0 0 1-3.406-1.406l-.343-.813c-.19.779-.685 1.92-1.907 2.531l-.437-.906c1.417-.708 1.468-2.45 1.468-2.469v-.312l1.22-.563.905 2.156a1.657 1.657 0 0 0 2.126.876l.562-.22-2.219-5.562C8.738 6.367 8.01 6.014 7.281 6zM14 14a1 1 0 0 0-1 1v1h3a1 1 0 0 0 1-1v-1h-3zm-2 3a1 1 0 0 0-1 1v1h3a1 1 0 0 0 1-1v-1h-3z`;
    const circleString = `M12.5 0.5A12 12 0 0 1 12.5 24.5A12 12 0 0 1 12.5 0.5`;
    const computerString = `M336.704 284.52H34.783c-15.366 0-27.862 12.502-27.862 27.862v31.243c0 15.366 12.496 27.861 27.862 27.861h301.921c15.366 0 27.862-12.495 27.862-27.861v-31.243c0-15.361-12.496-27.862-27.862-27.862zm-119.855 51.749H59.655v-14.934h157.194v14.934zm99.463 3.981c-6.581 0-11.932-5.356-11.932-11.932 0-6.605 5.351-11.938 11.932-11.938a11.922 11.922 0 0 1 11.938 11.938c.005 6.576-5.321 11.932-11.938 11.932zM336.704 0H34.783C19.417 0 6.92 12.502 6.92 27.862v220.851c0 15.366 12.496 27.856 27.862 27.856h301.921c15.366 0 27.862-12.49 27.862-27.856V27.868C364.566 12.502 352.07 0 336.704 0zm-7.452 234.451H36.773V29.853h292.479v204.598z`;

    makeSVG(`svgCircle`, parent_1, [0, 0, 25, 25] , circleSize, circleSize, circleString, `white`, 1, `white`, 1, 'path');
    makeSVG(`svgText`, parent_1, [0, 0, 100, 100], circleSize*0.8, circleSize*0.8, 0, `black`, 1, `black`, 0, 'text', `play!`);
    gsap.set(svgText, {  attr: {opacity: 0}  });

    svgCirclePath = document.getElementById(`svgCirclePath`);
    playButton = document.getElementById('svgTextCircle');
    gsap.set(playButton, {  attr: {'pointer-events':'auto' } } );
    
    
    makeSVG(`svgRock`, parent_1, [0, 0, 25, 25], svgSize, svgSize, rockString, `white`, 1,  `black`, 0, 'path');
    makeSVG(`svgPaper`, parent_1, [0, 0, 25, 25], svgSize, svgSize, paperString, `white`, 1, `black`, 0, 'path');
    makeSVG(`svgScissors`, parent_1, [0, 0, 25, 25], svgSize, svgSize, scissorsString, `white`, 1, `black`, 0,  'path');
    
    svgs = [svgRock, svgPaper, svgScissors];

    makeSVG(`svgCPU`, parent_2, [-95, -95, 560, 560], cpuSize, cpuSize, computerString, `white`, 0, `black`, 0, `path`);
    gsap.set(svgCPU, {  opacity: 0  });
    makeSVG(`svgVS`, parent_3, [0, 0, 250, 50], svgSize*0.8, svgSize*5, 0, `white`,0 , `black`, 0, 'text', `choose your play!`);
    const phrase = document.createElementNS(svgns, 'text');
    phrase.innerHTML = `VS`;
    gsap.set(phrase, { attr: {   id: `phraseText`,
        x: '50%',
        y: '-50%',
        'dominant-baseline': 'middle',
        'text-anchor': 'middle',
         class: `playText`,
        'fill': 'black',
        'stroke': 'black',
        'pointer-events':'none',
        opacity: 0
    } });
    svgVS.appendChild(phrase);
    gsap.set('#svgVSText', { attr: { 'fill': 'black', 'stroke': 'black'} });
    gsap.set(svgVS, {  opacity: 0  });

    makeSVG(`cpuSvgRock`, parent_2, [0, 0, 25, 25],svgSize, svgSize, rockString, `white`, 1, '#808080', 0, 'path');
    gsap.set(cpuSvgRock, {  opacity: 0  });
    makeSVG(`cpuSvgPaper`, parent_2, [0, 0, 25, 25],svgSize, svgSize, paperString, `white`, 1, '#808080', 0, 'path');
    gsap.set(cpuSvgPaper, {  opacity: 0  });
    makeSVG(`cpuSvgScissors`, parent_2, [0, 0, 25, 25],svgSize, svgSize, scissorsString, `white`, 1, '#808080', 0, 'path');
    gsap.set(cpuSvgScissors, {  opacity: 0  });

    makeSVG(`cpuSvgScore`, parent_2, [0,0, 220, 20], svgSize*0.4, svgSize*1.5, 0,`none`,0 , `none`, 0, 'text', `cpu score:`);
    gsap.set('#cpuSvgScore', {xPercent: -50, yPercent: -50});
    gsap.set('#cpuSvgScoreText', {fill: 'black'});

    makeSVG(`playerSvgScore`, parent_2, [0,0, 220, 20], svgSize*0.4, svgSize*1.5, 0,`none`,0 , `none`, 0, 'text', `player score:`);
    gsap.set('#playerSvgScore', {xPercent: -50, yPercent: -50});
    gsap.set('#playerSvgScoreText', {fill: 'black'});

    cpuSvgs = [cpuSvgRock, cpuSvgPaper, cpuSvgScissors];
    allSVGs = [svgCircle, svgText, svgRock, svgPaper, svgScissors, svgCPU, svgVS, cpuSvgRock, cpuSvgPaper, cpuSvgScissors, cpuSvgScore, playerSvgScore];

};


function createPlayButtonEvents () {

    playButton.addEventListener('mouseenter', enterPB);

    playButton.addEventListener('mouseout', outPB);
    
    playButton.addEventListener('click', ()=>{
        const dt = 0.2;
        playButton.removeEventListener('mouseenter', enterPB);
        playButton.removeEventListener('mouseout', outPB);
    
        gsap.to(svgText, {scale: 0, duration: dt});
        gsap.to(svgCircle, {scale: 0, duration: dt, delay: dt});
    
        gameStart();
    });

};


function enterPB() {
    const dt = 0.1;
    gsap.to('#svgTextText', { attr: { 
                                        'fill': 'red',
                                        'stroke': 'red'
     }, duration: dt });
     gsap.to(svgText, {scale: 1.15, duration: 0.1});    
};


function outPB() {
    const dt = 0.1;
    gsap.to('#svgTextText', { attr: { 
                                        'fill': 'white',
                                        'stroke': 'white'
     } , duration: dt});
     gsap.to(svgText, {scale: 1, duration: dt});  
};


function gameStart() {

    openingAnimation.pause();
    
    gameStartAnimation = createGameStartAnimation (contDiv, svgs, svgCPU, svgVS, dt);
    gameStartAnimation.play();

    makePlayEvents();

    gameState = {
        playerScore: 0,
        cpuScore: 0,
        numberOfRounds: 5,
        currentRound: 0
    };

    cpuSvgScoreText.innerHTML = 'cpu score: ' + `${gameState.cpuScore}`;
    playerSvgScoreText.innerHTML = 'player score: ' + `${gameState.playerScore}`;


};






function createOpeningAnimation (parent, targets, circle, circlePath, text, dt, lapTime) {

    const winWidth = parent.clientWidth;
    const winHeight = parent.clientHeight;
    const Ytop = winHeight/2 - triSide/k;
    const Xtop = winWidth/2;
    const Ybottom = winHeight/2 + triSide/k/2;
    const Xleft = winWidth/2 - triSide/2;
    const Xright = winWidth/2 + triSide/2;
    const startDy = parent.offsetTop- body.clientHeight/2; 
    const Yextra = Math.tan(Math.PI / 6)*(winWidth/2 + parent.offsetLeft);

    // gsap.set(playButton, {  attr: {'pointer-events':'auto' } } );

    const openingAnimation = gsap.timeline({ defaults: { duration: dt, xPercent:-50, yPercent: -50 }, paused: false} )
    openingAnimation.fromTo( circle,        {x: winWidth/2, y: winHeight/2 - startDy, opacity: 0},
                                            {opacity: 1, scale: 1}, 0 )
                    .fromTo( targets[0],    {opacity: 1, x: -svgSize - parent.offsetLeft, y: winHeight/2 + Yextra - startDy }, 
                                            {x: Xleft, y: Ybottom - startDy, opacity: 1} )
                    .fromTo( targets[1],    {opacity: 1, x: Xtop, y: - svgSize/2 - parent.offsetTop  - parent.clientHeight/2 - startDy},
                                            {x: Xtop, y: Ytop - startDy, opacity: 1} )
                    .fromTo( targets[2],    {opacity: 1, x: winWidth + parent.offsetLeft + svgSize, y: winHeight/2 + Yextra - startDy},
                                            {x: Xright, y: Ybottom - startDy, opacity: 1} )
                    .to(targets[0], {   duration: lapTime, 
                                        repeat: -1,
                                        repeatDelay: 0,
                                        ease: 'none',
                                        motionPath:{    start: -0.333,
                                                        end: -0.333+1,  
                                                        path: circlePath,
                                                        align: circlePath,
                                                        autoRotate: false,
                                                        alignOrigin: [0.5, 0.5]   }
                                    } , dt*4   )
                    .to(targets[1], {   duration: lapTime, 
                                        repeat: -1,
                                        repeatDelay: 0,
                                        ease: 'none',
                                        motionPath:{    start: 0,
                                                        end: 1,  
                                                        path: circlePath,
                                                        align: circlePath,
                                                        autoRotate: false,
                                                        alignOrigin: [0.5, 0.5]   }
                                    } , dt*4   )
                    .to(targets[2], {   duration: lapTime, 
                                        repeat: -1,
                                        repeatDelay: 0,
                                        ease: 'none',
                                        motionPath:{    start: 0.333,
                                                        end: 0.333+1,  
                                                        path: circlePath,
                                                        align: circlePath,
                                                        autoRotate: false,
                                                        alignOrigin: [0.5, 0.5]   }
                                    } , dt*4   )
                    .fromTo( text,  {x: winWidth/2, y: winHeight/2 - startDy, scale: 0.1},
                                    {opacity: 1, duration:0.5, scale: 1}, dt*5)
                    // .set(playButton, {xPercent:0, yPercent: 0, attr: { 'pointer-events':'auto'} } )

    return openingAnimation;
};



function createGameStartAnimation (parent, targets, CPU, VS, dt) {

    const winWidth = parent.clientWidth;
    const winHeight = parent.clientHeight;

    const GameStartAnimation = gsap.timeline({ defaults: { duration: dt, xPercent:-50, yPercent: -50 }, paused: true} )

    GameStartAnimation.to(targets[0], {x: winWidth/2 - (winWidth/2 + parent.offsetLeft)*2/3, y: winHeight/2 }, 0.5)
                      .to(targets[2], {x: winWidth/2 - (winWidth/2 - parent.offsetLeft)*2/3 , y: winHeight/2}, 0.5)
                      .to(targets[1], {x: winWidth/2, y: winHeight/2}, 0.5)
                      .fromTo(CPU, {x: 0, y:0, scale: 0}, {x:0, y:0, scale: 2, opacity: 1, zIndex: -1}, 0.5+dt)
                      .fromTo('#cpuSvgScore', {x: 0, y:-20, scale: 1, opacity: 0}, {x:0, y:-20, scale: 1, opacity: 1, zIndex: -1}, 0.9+dt)
                      .fromTo('#playerSvgScore', {x: 0, y:0, scale: 1, opacity: 0}, {x:0, y:0, scale: 1, opacity: 1, zIndex: -1}, 0.9+dt)
                      .fromTo(VS, {x: 0, y:0, scale: 0}, {x:0, y:0, scale: 1, opacity: 1}, 1+dt)
    
    return GameStartAnimation;
};


function fnenter(event) {
    gsap.to(event.target, {scale: 1.5, duration: 0.2})
};

function fnout(event) {
    gsap.to(event.target, {scale: 1, duration: 0.2})
};

function fnclick(event) {
    startTurn(event.target);
};


function makePlayEvents() {
    svgs.forEach(
        (svg)=>{
            gsap.set(svg, { attr: { 'pointer-events':'auto'  } });
            svg.addEventListener(`mouseenter`, fnenter);
            svg.addEventListener(`mouseout`, fnout );
            svg.addEventListener(`click`, fnclick);
        }
    );
};


function deletePlayEvents() {
    svgs.forEach(
        (svg)=>{

            svg.removeEventListener(`mouseenter`, fnenter);
            svg.removeEventListener(`mouseout`, fnout);
            svg.removeEventListener(`click`, fnclick);
        }
    );    
};



function startTurn(svg) {

    //make all playerChoice svgs inactive for clicking or hovering
    gsap.set(svgs, { attr: { 'pointer-events':'none'  } });

    gameState.currentRound += 1;
    

    const index = Math.floor(Math.random()*3);
    const cpuSvg = cpuSvgs[index];
    const playerSvg = svg;

    const [winner, topSvg, bottomSvg] = getWinner(playerSvg, cpuSvg);
    const turnAnimation = createTurnAnimation(playerSvg, cpuSvg, topSvg, bottomSvg);

};

function changePBtext (text) {
    const playText = document.getElementById('svgTextText');
    playText.innerHTML = text;

};

function gameOver(winner) { 

    const gameOverText = `<tspan x="50%" y="35%"> ${winner} </tspan>` + `<tspan x="50%" y="65%">wins!</tspan>`;
    const playAgainText = `<tspan x="50%" y="35%">play</tspan>` + `<tspan x="50%" y="65%">again!</tspan>`;

    const gameOverAnimation = gsap.timeline({ defaults: { duration: 1, ease: 'none' }, paused: false} );
    gameOverAnimation.to(allSVGs, {opacity: 0}, 0)
                    .set(svgs, {attr: { 'pointer-events':'none'  } })
                    .set(playButton, {attr: { 'pointer-events':'none'} } )
                    .add( ()=>{changePBtext(gameOverText)} , "+=0")
                    .to(svgText, {opacity: 1, scale: 2})
                    .to(svgText, {opacity: 1, scale: 1.9})
                    .to(svgText, {opacity: 1, scale: 1.9, duration: 3})
                    .to(svgText, {opacity: 0, scale: 0})
                    .add(  ()=>{changePBtext(playAgainText)}, "+=0")
                    .add(openingAnimationStart, "+=0")
                    .set(playButton, {  attr: {'pointer-events':'auto' } } );
    deletePlayEvents();  

    

};


function openingAnimationStart() {
    openingAnimation.seek(0);
    openingAnimation.play();
    createPlayButtonEvents ();
};


function updateScore() {
    cpuSvgScoreText.innerHTML = 'cpu score: ' + `${gameState.cpuScore}`;
    playerSvgScoreText.innerHTML = 'player score: ' + `${gameState.playerScore}`;
    if (gameState.cpuScore == scoreToWin) {
        gameOver('cpu');
    };

    if (gameState.playerScore == scoreToWin) {
        gameOver('player');
    };
};





function getWinner(playerSvg, cpuSvg) {

    let winner;
    let topSvg;
    let bottomSvg;

    if (    ( playerSvg == svgRock && cpuSvg == cpuSvgScissors ) || 
            ( playerSvg == svgPaper && cpuSvg == cpuSvgRock ) ||
            ( playerSvg == svgScissors && cpuSvg == cpuSvgPaper )   ) {
                winner = 'player';
                gameState.playerScore += 1; 
                topSvg = playerSvg;
                bottomSvg = cpuSvg;                    
            };
    if (    ( playerSvg == svgRock && cpuSvg == cpuSvgPaper ) || 
            ( playerSvg == svgPaper && cpuSvg == cpuSvgScissors ) ||
            ( playerSvg == svgScissors && cpuSvg == cpuSvgRock )   ) {
                winner = 'cpu';
                gameState.cpuScore += 1;     
                topSvg = cpuSvg;
                bottomSvg = playerSvg;                                    
            };
    if (!winner) {  winner = `none`;
                    topSvg = `none`;
                    bottomSvg = `all`;
                 };    

    return [winner, topSvg, bottomSvg];

};


function createTurnAnimation(playerSvg, cpuSvg, topSvg, bottomSvg) {

    if (topSvg != `none`) {
        const animation = createWinnerAnimation(playerSvg, cpuSvg, topSvg, bottomSvg);
        return animation;
    };

    if (topSvg == `none`) {
        const animation = createDrawAnimation(playerSvg, cpuSvg);
        return animation;
    };

};


function createDrawAnimation(playerSvg, cpuSvg) {

    playerStartX = gsap.getProperty(playerSvg, `x`);
    playerStartY = gsap.getProperty(playerSvg, `y`);

    cpuStartX = gsap.getProperty(cpuSvg, `x`);
    cpuStartY = gsap.getProperty(cpuSvg, `y`);

    pointLeft = {x: 0 - body.clientWidth/10, y: 0};
    pointRight = {x: 0 + body.clientWidth/10, y: 0};

    pointLeftClose = {x: 0 - body.clientWidth/20, y: 0};
    pointRightClose = {x: 0 + body.clientWidth/20, y: 0}    


    var newPointLeft = MotionPathPlugin.convertCoordinates(battleDiv, contDiv, pointLeft);
    var newPointLeftClose = MotionPathPlugin.convertCoordinates(battleDiv, contDiv, pointLeftClose);

    var newPointRight = MotionPathPlugin.convertCoordinates(battleDiv, cpuDiv, pointRight);
    var newPointRightClose = MotionPathPlugin.convertCoordinates(battleDiv, cpuDiv, pointRightClose);


    const drawAnimation = gsap.timeline({ defaults: { duration: 1, xPercent:-50, yPercent: -50,  ease: 'none' }, paused: false} );
    drawAnimation.to(playerSvg, {x: newPointLeft.x, y: newPointLeft.y}, 0)
                 .fromTo(cpuSvg, {x: 0, y: 0, scale: 0}, {x: newPointRight.x, y: newPointRight.y, opacity: 1, scale: 1}, 0)
                 .to('#svgVSText', {opacity: 0, xPercent: 0, yPercent: 0, duration: 0.1}, 0)
                 .fromTo('#phraseText', {xPercent: 0,  yPercent: 50}, {opacity: 1, duration: 1, xPercent: 0,  yPercent: 125}, 0)
                 .to(playerSvg, {x: newPointLeftClose.x, y: newPointLeftClose.y}, 1)
                 .to(cpuSvg, {x: newPointRightClose.x, y: newPointRightClose.y}, 1)
                 .to('#phraseText', {opacity: 0, duration: 0.1, xPercent: 0,  yPercent: 125}, 2)
                 .to(playerSvg, {x: playerStartX, y: playerStartY}, 2)
                 .to(cpuSvg, {x: cpuStartX, y: cpuStartY, scale: 0, opacity: 0}, 2)
                 .to('#svgVSText', {opacity: 1, xPercent: 0, yPercent: 0,  duration: 0.2}, 3)
                 .set(svgs, { attr: { 'pointer-events':'auto'  } });

    return drawAnimation;

};



function createWinnerAnimation(playerSvg, cpuSvg, topSvg, bottomSvg) {

    playerStartX = gsap.getProperty(playerSvg, `x`);
    playerStartY = gsap.getProperty(playerSvg, `y`);

    cpuStartX = gsap.getProperty(cpuSvg, `x`);
    cpuStartY = gsap.getProperty(cpuSvg, `y`);

    pointLeft = {x: 0 - body.clientWidth/10, y: 0};
    pointRight = {x: 0 + body.clientWidth/10, y: 0};

    pointCenter = {x:0, y:0};
    pointCenterUp={x:0, y:-25};

    var newPointLeft = MotionPathPlugin.convertCoordinates(battleDiv, contDiv, pointLeft);
    // var newPointLeftClose = MotionPathPlugin.convertCoordinates(battleDiv, contDiv, pointLeftClose);

    var newPointRight = MotionPathPlugin.convertCoordinates(battleDiv, cpuDiv, pointRight);
    // var newPointRightClose = MotionPathPlugin.convertCoordinates(battleDiv, cpuDiv, pointRightClose);

    let fromDivWinner;
    let fromDivLooser;

    if (topSvg == playerSvg) {
        fromDivWinner = contDiv;
        fromDivLooser = cpuDiv;
    }; 
    if (topSvg == cpuSvg) {
        fromDivWinner = cpuDiv;
        fromDivLooser = contDiv;
    };

    var newPointCenter = MotionPathPlugin.convertCoordinates(battleDiv, fromDivLooser, pointCenter);
    var newPointCenterUp = MotionPathPlugin.convertCoordinates(battleDiv, fromDivWinner, pointCenterUp);


    const winnerAnimation = gsap.timeline({ defaults: { duration: 1, xPercent:-50, yPercent: -50,  ease: 'none' }, paused: false} );
    winnerAnimation.to(playerSvg, {x: newPointLeft.x, y: newPointLeft.y}, 0)
                 .fromTo(cpuSvg, {x: 0, y: 0, scale: 0}, {x: newPointRight.x, y: newPointRight.y, opacity: 1, scale: 1}, 0)
                 .to('#svgVSText', {opacity: 0, xPercent: 0, yPercent: 0, duration: 0.1}, 0)
                 .fromTo('#phraseText', {xPercent: 0,  yPercent: 50}, {opacity: 1, duration: 1, xPercent: 0,  yPercent: 125}, 0)
                 .set(topSvg, {css:{zIndex:2}})
                 .to('#phraseText', {opacity: 0, duration: 0.1, xPercent: 0,  yPercent: 125}, 2)
                 .to(topSvg, {x: newPointCenterUp.x, y: newPointCenterUp.y, scale: 1.25, duration: 0.3}, 2)
                 .to(bottomSvg, {x: newPointCenter.x, y: newPointCenter.y, scale: 1, duration: 0.3}, 2)
                 .to(playerSvg, {x: playerStartX, y: playerStartY, scale: 1}, 3)
                 .to(cpuSvg, {x: cpuStartX, y: cpuStartY, scale: 0, opacity: 0}, 3)
                 .to('#svgVSText', {opacity: 1, xPercent: 0, yPercent: 0,  duration: 0.2}, 3.5)
                 .to(topSvg, {duration: 0, css:{zIndex:1}}, 4)
                 .to(svgs, { duration: 0, attr: { 'pointer-events':'auto'  } }, 4)
                 .add(updateScore, "+=0"); 
    
    
    return winnerAnimation;

};