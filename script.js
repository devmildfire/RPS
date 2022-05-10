
createGameField();

createSVGs (contDiv, cpuDiv, battleDiv);

createPlayButtonEvents ();

const openingAnimation  = createOpeningAnimation(contDiv, svgs, svgCircle, svgCirclePath, svgText, dt, lapTime);
let gameStartAnimation = createGameStartAnimation (contDiv, svgs, svgCPU, svgVS, dt);





        

