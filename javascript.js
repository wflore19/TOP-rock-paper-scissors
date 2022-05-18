    let playerScore = 0;
    let computerScore = 0;
    
function computerPlay() {
    const compMove = ['rock', 'paper', 'scissors'];
    const randomMove = compMove[(Math.random() * compMove.length) | 0];

    return randomMove;
}

function playRound(playerSelection, computerSelection) {
    let results = '';
    /* playerSelection = prompt('rock, paper, or scissors?').toLowerCase(); */
    computerSelection = computerPlay();
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
         (playerSelection === 'scissors' && computerSelection === 'paper') ||
         (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore += 1;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return results = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
             (playerSelection === 'scissors' && computerSelection === 'rock') ||
             (playerSelection === 'paper' && computerSelection === 'scissors')) {
        computerScore += 1;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return results = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == computerSelection) {
        console.log(`Tied, no points`);
        return results = `Tied, no points`;
    } else {
        console.log(`error`);
        return `error`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        /* console.log(`Player: ${playerScore} - Computer ${computerScore}
        Player wins`); */
        return `Player: ${playerScore} - Computer ${computerScore}
        Player wins`;
    } else if (computerScore > playerScore) {
        /* console.log(`Player: ${playerScore} - Computer ${computerScore}
        Computer wins`); */
        return `Player: ${playerScore} - Computer ${computerScore}
        Computer wins`;
    } else {
        return `rematch`;
    }
}

const rock = document.querySelector('.rock');
    rock.addEventListener('click', () => {
    playRound('rock', computerPlay());
    });

const paper = document.querySelector('.paper');
    paper.addEventListener('click', () => {
    playRound('paper', computerPlay());
    });

const scissors = document.querySelector('.scissors');
    scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay());
    });