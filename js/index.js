getPlayerInputInString();

function validateResult(getPlayerInputInString, getRandomRockPaperScissorsResultInString){
    if (getPlayerInputInString == 'Rock') 

}

function resultOfOneGame(playerInput, aiResult){

}

// const resultOfAi = document.getElementById('computerPlayResult');
// resultOfAi.insertAdjacentText('beforeend', getRockPaperScissorsAIResult().toString());

function testRock(string){
    let tester = /^rock$/i;
    return tester.test(string)
}

function testRock(string){
    let tester = /^paper$/i;
    return tester.test(string)
}

function testRock(string){
    let tester = /^scissors$/i;
    return tester.test(string)
}

function getRandomRockPaperScissorsResultInString(){
    let possibleAnswers = ["Rock", "Paper", "Scissors"];
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
    return validatedPlayerInput;
}