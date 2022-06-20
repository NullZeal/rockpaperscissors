let currentWeaponChoice = "";
let playerScore = 0;
let aiScore = 0;
let nMatchToWin = 5;

const firstToXMatchToWin = document.querySelector('#pick');

firstToXMatchToWin.innerHTML = `First to ${nMatchToWin} wins the set!<br><br>Pick your weapon!</p`

listOfImg = document.getElementsByTagName("img");

for(let img of listOfImg){
    img.addEventListener('click', () => 
    {   
        if(img.id == "rockImg")
        {
            currentWeaponChoice = 'Rock';
            img.style
        }
        else if (img.id == "paperImg")
        {
            currentWeaponChoice = 'Paper';
        }
        else 
        {
            currentWeaponChoice = 'Scissors';
        }
        startGame();
    })
}

function startGame(){
    resetScoreIfEndGameReached();
    displayCurrentWeaponChoice();
    let aiRoll = getRandomRockPaperScissorsResultInString();
    displayAiRollTextContent(aiRoll);
    displayColoredMatchOutcome(currentWeaponChoice, aiRoll);
    displayScore();
    displayGameOutcomeIfEndGameReached();
}

function resetScoreIfEndGameReached(){
    let gameOutcome = document.getElementById("gameOutcome");
    if(gameOutcome.textContent != ''){
        playerScore = 0;
        aiScore = 0;
    }
}

function displayCurrentWeaponChoice(){
    document.getElementById("currentWeaponChoice").innerHTML = `Your Input was: ${currentWeaponChoice}`;
}

function displayAiRollTextContent(aiRoll){
    document.getElementById("aiRoll").innerHTML = `AI Roll: ${aiRoll}`;
}

function displayScore(){
    document.getElementById("scoreDisplay").textContent = `Player score: ${playerScore}
    Ai score: ${aiScore}`;
}

function displayColoredMatchOutcome(playerInput, randomResult){
    if (isGameWon(playerInput, randomResult)){
        document.getElementById("matchOutcome").innerHTML = `Match is won!<br><br>${playerInput} beats ${randomResult}!`;
        document.getElementById("matchOutcome").style.color = "green";
    }
    else if (isGameDraw(playerInput, randomResult)){
        document.getElementById("matchOutcome").innerHTML = `Match is a Draw!<br><br>${playerInput} is the same as ${randomResult}!`;
        document.getElementById("matchOutcome").style.color = "orange";
    }
    else{
        aiScore++;
        document.getElementById("matchOutcome").innerHTML = `Match is lost!<br><br>${randomResult} beats ${playerInput}!`;
        document.getElementById("matchOutcome").style.color = "red";
    }
}

function isGameWon(playerInput, randomResult){
    result = false;
    if(playerInput == 'Rock' && randomResult == 'Scissors'
    || playerInput == 'Paper' && randomResult == 'Rock'
    || playerInput == 'Scissors' && randomResult == 'Paper')
    {
        playerScore++;
        result = true;
    }
    return result;
}

function isGameDraw(playerInput, randomResult){
    result = false;
    if(playerInput == 'Rock' && randomResult == 'Rock'
    || playerInput == 'Paper' && randomResult == 'Paper'
    || playerInput == 'Scissors' && randomResult == 'Scissors')
    {
        result = true;
    }
    return result;
}

function displayGameOutcomeIfEndGameReached(){

    let gameOutcome = document.getElementById("gameOutcome");

    if(playerScore >= nMatchToWin || aiScore >= nMatchToWin){

        if(playerScore > aiScore){
             gameOutcome.textContent = `GAME OVER - PLAYER WINS THE SET - They got ${nMatchToWin} points first.`;
        }
        else {
            gameOutcome.textContent = `GAME OVER - AI WINS THE SET - They got ${nMatchToWin} points first.`;
        }
    }
    else{
        gameOutcome.textContent = '';
    }
}

function getRandomRockPaperScissorsResultInString(){
    let possibleAnswers = ['Rock', 'Paper', 'Scissors'];
    let answer = possibleAnswers[Math.floor(Math.random() * (possibleAnswers.length - 0) + 0)];
    return answer;
}