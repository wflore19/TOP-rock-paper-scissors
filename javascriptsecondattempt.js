function computerPlay() {
    const compMove = ['rock', 'paper', 'scissor'];
    const randomMove = compMove[(Math.random() * compMove.length) | 0];

    return randomMove;
}

function result(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'tied, you both chose rock';
        } else if (computerSelection === 'paper') {
        return 'You lose! Paper beats rock.';
        } else if (computerSelection === 'scissor') {
        return 'You win! Rock beats scissor.';
        } 
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            return 'tied, you both chose paper';
        } else if (computerSelection === 'scissor') {
            return 'You lose! Scissor beats paper';
        } else if (computerSelection === 'rock') {
            return 'You win! Paper beats rock';
        }
    } else if (playerSelection === 'scissor') {
        if (computerSelection === 'scissor') {
            return 'tied, you both chose scissor';
        } else if (computerSelection === 'rock') {
            return 'You lose! Rock beats scissor';
        } else if (computerSelection === 'paper') {
            return 'You win! Scissor beats paper';
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Let\'s play a game: rock, paper, or scissor?');
        const computerSelection = computerPlay();

        /* output */
        console.log('player: ' + playerSelection.toLowerCase());
        console.log('computer: ' + computerSelection);
        console.log(result(playerSelection.toLowerCase(), computerSelection));
    }
}

/* 

function scoreBoard(playerScore, computerScore) {
    if  (playerScore > computerScore) {
        return 'Player wins!'
    } else {
        return 'Computer wins :('
    }
}

    const playerScore = 3;
    const computerScore = 2;
    console.log(scoreBoard(playerScore, computerScore))
*/