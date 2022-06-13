for(i=0;i<5;i++){
    playOneGame();
}
function playOneGame(){
    displayGameResult(getPlayerInputInString(), getRandomRockPaperScissorsResultInString());
}

function displayGameResult(playerInput, randomResult){
    if (isGameWon(playerInput, randomResult)){
        alert('Game is won!')
    }
    else if (isGameDraw(playerInput, randomResult)){
        alert('Game is Draw!')
    }
    else{
        alert('Game is lost!')
    }
}

function isGameWon(playerInput, randomResult){
    result = false;
    if(playerInput == 'Rock' && randomResult == 'Scissors'){
        result = true;
    }
    if(playerInput == 'Paper' && randomResult == 'Rock'){
        result = true;
    }
    if(playerInput == 'Scissors' && randomResult == 'Paper'){
        result = true;
    }
    return result;
}

function isGameDraw(playerInput, randomResult){
    result = false;
    if(playerInput == 'Rock' && randomResult == 'Rock'){
        result = true;
    }
    if(playerInput == 'Paper' && randomResult == 'Paper'){
        result = true;
    }
    if(playerInput == 'Scissors' && randomResult == 'Scissors'){
        result = true;
    }
    return result;
}


function getRandomRockPaperScissorsResultInString(){
    let possibleAnswers = ['Rock', 'Paper', 'Scissors'];
    let answer = possibleAnswers[Math.floor(Math.random() * (possibleAnswers.length - 0) + 0)];
    return answer;
}

function getPlayerInputInString(){
    let keepGoing = true;
    let validatedPlayerInput = "";
    while(keepGoing){
        let unvalidatedPlayerInput = prompt('Select either Rock, Paper or Scissors by typing your answer.');
        let tester = /^rock$|^paper$|^scissors$/i;
        if (!tester.test(unvalidatedPlayerInput)){
            alert('Wrong Answer!');
        }
        else{
            keepGoing = false;
            validatedPlayerInput = unvalidatedPlayerInput;
        }
    }
    if (isRock(validatedPlayerInput)){
        return 'Rock';
    }
    else if (isPaper(validatedPlayerInput)){
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function isRock(string){
    let tester = /^rock$/i;
    return tester.test(string)
}

function isPaper(string){
    let tester = /^paper$/i;
    return tester.test(string)
}

function isScissors(string){
    let tester = /^scissors$/i;
    return tester.test(string)
}