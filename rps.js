const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const compItems = [ "ROCK", "PAPER", "SCISSORS" ];
let playerScore = 0;
let compScore = 0;

rock.addEventListener('click', function(){
    playerSelection = "ROCK";
    playRound();
})

paper.addEventListener('click', function(){
    playerSelection = "PAPER";
    playRound();
})

scissors.addEventListener('click', function(){
    playerSelection = "SCISSORS";
    playRound();
})

function playRound(){
    compSelection = computerPlay();
    updateScore(playerSelection, compSelection);
    displayCompItem(compSelection);
    updateItem(playerSelection, compSelection);
    whoWon(playerScore, compScore);
}

function computerPlay(){
    return compItems[Math.floor(Math.random()*compItems.length)];
}

function updateScore(playerSelection, compSelection){
    const myScoreDisplay = document.querySelector("#myScore");
    const compScoreDisplay = document.querySelector("#compScore");

    if (playerSelection == compSelection){
        return;
    } else if (playerSelection == "ROCK" && compSelection == "SCISSORS"){
        return myScoreDisplay.textContent = playerScore += 1;
    } else if (playerSelection == "PAPER" && compSelection == "ROCK"){
        return myScoreDisplay.textContent = playerScore += 1;
    } else if (playerSelection == "SCISSORS" && compSelection == "PAPER"){
        return myScoreDisplay.textContent = playerScore += 1;
    } else {
        return compScoreDisplay.textContent = compScore += 1;
    }
}

function updateItem(playerSelection){
    const myItemDisplay = document.querySelector("#myChoice");

    if (playerSelection == "ROCK"){
        return myItemDisplay.textContent = "ROCK!";
    }
    if (playerSelection == "PAPER"){
        return myItemDisplay.textContent = "PAPER!";
    }
    if (playerSelection == "SCISSORS"){
        return myItemDisplay.textContent = "SCISSORS!";
    }
}

function displayCompItem(compSelection){
    compRecord = document.querySelector("#compChoice");
    
    compRecord.textContent = compSelection + "!";
}

function whoWon(playerScore, compScore){
    if (playerScore == 3 || compScore == 3){
        const mainContain = document.querySelector("#mainContain");
        const results = document.querySelector("#results")
        mainContain.style.display = "none";
        results.scrollIntoView();
    }
    if (playerScore == 3 ){
        const youWon = document.querySelector("#youWon");
        youWon.style.display = 'block';
    }
    if (compScore == 3 ){
        const youLost = document.querySelector("#youLost");
        youLost.style.display = 'block';
    }
}


