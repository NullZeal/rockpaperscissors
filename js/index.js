let currentWeaponChoice = "";

function setRockWeapon(){
    currentWeaponChoice = "Rock";
    playOneGame();
}

function setPaperWeapon(){
    currentWeaponChoice = "Paper";
    playOneGame();
}

function setScissorsWeapon(){
    currentWeaponChoice = "Scissors";
    playOneGame();
}

function playOneGame(){
    let playerInput = currentWeaponChoice;
    document.getElementById("playerInput").innerHTML = `Your Input was: ${playerInput}`;
    let randomRoll = getRandomRockPaperScissorsResultInString();
    document.getElementById("randomRoll").innerHTML = `AI Roll: ${randomRoll}`;
    displayGameResult(playerInput, randomRoll);
}

function displayGameResult(playerInput, randomResult){
    if (isGameWon(playerInput, randomResult)){
        document.getElementById("gameResult").innerHTML = `Game is won! ${playerInput} beats ${randomResult}!`;
        document.getElementById("gameResult").style.color = "green";
    }
    else if (isGameDraw(playerInput, randomResult)){
        document.getElementById("gameResult").innerHTML = `Game is a Draw! ${playerInput} is the same as ${randomResult}!`;
        document.getElementById("gameResult").style.color = "orange";
    }
    else{
        document.getElementById("gameResult").innerHTML = `Game is lost! ${randomResult} beats ${playerInput}!`;
        document.getElementById("gameResult").style.color = "red";
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