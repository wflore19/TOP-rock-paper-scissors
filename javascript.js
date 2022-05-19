    let playerScore = 0;
    let computerScore = 0;
    let scoreBoard;
    let result;

function computerPlay() {
    const compMove = ['rock', 'paper', 'scissors'];
    const randomMove = compMove[(Math.random() * compMove.length) | 0];

    return randomMove;
}

function playRound(playerChoice, computerChoice) {
    computerChoice = computerPlay();
    document.querySelector('.result').textContent = rules(playerChoice, computerChoice);
}


function rules(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
         (playerSelection === 'scissors' && computerSelection === 'paper') ||
         (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore += 1;
        result =`You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
             (playerSelection === 'scissors' && computerSelection === 'rock') ||
             (playerSelection === 'paper' && computerSelection === 'scissors')) {
        computerScore += 1;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == computerSelection) {
        computerScore += 1;
        playerScore += 1;
        result = `Tied`;
    } else {
        return
    }
    return `Computer: ${computerSelection} - ${result}`;
}

function game() {

    if (playerScore > computerScore) {
        scoredBoard = `Player: ${playerScore} - Computer ${computerScore}
        Player wins`;
    } else if (computerScore > playerScore) {
        return `Player: ${playerScore} - Computer ${computerScore} Computer wins`;
    } else {
        return `rematch`;
    }
}
    
const rock = document.querySelector('.rock');
    rock.addEventListener('click', function () {
    playRound('rock', computerPlay());
    });

const paper = document.querySelector('.paper');
    paper.addEventListener('click', function () {
    playRound('paper', computerPlay());
    });

const scissors = document.querySelector('.scissors');
    scissors.addEventListener('click', function () {
    playRound('scissors', computerPlay());
    });

const startGame = document.querySelector('.startGame');
    startGame.addEventListener('click', function () {  game();
    })
    
    document.querySelector('.scoreBoard').textContent = `player: ${playerScore} - cpu: ${computerScore}`;