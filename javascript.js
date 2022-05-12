function computerPlay() {
    const compMove = ['rock', 'paper', 'scissors'];
    const randomMove = compMove[(Math.random() * compMove.length) | 0];

    return randomMove;
}

function rules(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'tied';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissor';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats paper';
    }
}

function playRound() {
    const playerSelection = prompt('enter a value: ');
    const playerSelectionInsensitive = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    console.log(rules(playerSelectionInsensitive, computerSelection));   
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();   
    }
}

/*
function score() {
    let playerScore = '';
    let compScore = '';

    if (playerSelectionInsensitive == computerSelection) {
        return;
    } else if (playerSelectionInsensitive === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
    } else if (playerSelectionInsensitive === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
    } else if (playerSelectionInsensitive === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
    } else if (playerSelectionInsensitive === 'rock' && computerSelection === 'paper') {
        compScore += 1;
    } else if (playerSelectionInsensitive === 'scissors' && computerSelection === 'rock') {
        compScore += 1;
    } else if (playerSelectionInsensitive === 'paper' && computerSelection === 'scissors') {
        compScore += 1;
    }

    console.log('user=' + playerScore, 'comp=' + compScore);
}
*/

/*
let playerScore = 0;
    let compScore = 0;

    if (playerSelectionInsensitive == computerSelection) {
        console.log('tied, no one gets points');
    } else if (playerSelectionInsensitive === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
    } else if (playerSelectionInsensitive === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
    } else if (playerSelectionInsensitive === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
    } else if (playerSelectionInsensitive === 'rock' && computerSelection === 'paper') {
        compScore += 1;
    } else if (playerSelectionInsensitive === 'scissors' && computerSelection === 'rock') {
        compScore += 1;
    } else if (playerSelectionInsensitive === 'paper' && computerSelection === 'scissors') {
        compScore += 1;
    }

    console.log(playerScore, compScore);
*/


/*
rules();
        if (playerSelection == computerSelection) {
            return 'tied, no one gets points';
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return playerScore += 1;
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return playerScore += 1;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return playerScore += 1;
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return compScore += 1;
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return compScore += 1;
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return compScore += 1;
        }
*/

/*
playerSelection picks weapon
computerSelection picks weapon
    if playerSelection is rock & computerSelection is scissors print "Player wins"

*/