function getPlayerInput(){
    let keepGoing = true;
    while(keepGoing){
        let playerInput = prompt('Select either Rock, Paper or Scissors by typing your answer.');
        let tester = /^rock$|^paper$|^scissors$/i;
        if (!tester.test(playerInput)){
            alert('Wrong Answer!');
        }
        else{
            keepGoing = false;
        }
    }

}
getPlayerInput()

function resultOfOneGame(playerInput, aiResult){

}

function getRockPaperScissorsAIResult(){
    let possibleAnswers = ["Rock", "Paper", "Scissors"];
    let answer = possibleAnswers[Math.floor(Math.random() * (possibleAnswers.length - 0) + 0)].toString();
    return answer;
}

// const resultOfAi = document.getElementById('computerPlayResult');
// resultOfAi.insertAdjacentText('beforeend', getRockPaperScissorsAIResult().toString());


