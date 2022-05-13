function computerPlay() {
    const compMove = ['rock', 'paper', 'scissor'];
    const randomMove = compMove[(Math.random() * compMove.length) | 0];

    return randomMove;
}

function rules(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'tied';
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return 'You win! Rock beats scissor';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return 'You win! Scissor beats paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats rock';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return 'You lose! Rock beats scissor';
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return 'You lose! Scissor beats paper';
    }
}

function playRound() {
    const playerSelection = prompt('enter a value: ');
    const playerSelectionInsensitive = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    
    let playerScore = '';
    let compScore = '';

    if (playerSelectionInsensitive == computerSelection) {

    } else if (playerSelectionInsensitive === 'rock' && computerSelection === 'scissor') {
        playerScore++;
    } else if (playerSelectionInsensitive === 'scissor' && computerSelection === 'paper') {
        playerScore++;
    } else if (playerSelectionInsensitive === 'paper' && computerSelection === 'rock') {
        playerScore++;
    } else if (playerSelectionInsensitive === 'rock' && computerSelection === 'paper') {
        compScore++;
    } else if (playerSelectionInsensitive === 'scissor' && computerSelection === 'rock') {
        compScore++;
    } else if (playerSelectionInsensitive === 'paper' && computerSelection === 'scissor') {
        compScore++;
    }

    console.log('user=' + playerScore, 'comp=' + compScore);
    console.log(rules(playerSelectionInsensitive, computerSelection));
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

/*
function score() {
  
*/

/*
let playerScore = 0;
    let compScore = 0;

    if (playerSelectionInsensitive == computerSelection) {
        console.log('tied, no one gets points');
    } else if (playerSelectionInsensitive === 'rock' && computerSelection === 'scissor') {
        playerScore += 1;
    } else if (playerSelectionInsensitive === 'scissor' && computerSelection === 'paper') {
        playerScore += 1;
    } else if (playerSelectionInsensitive === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
    } else if (playerSelectionInsensitive === 'rock' && computerSelection === 'paper') {
        compScore += 1;
    } else if (playerSelectionInsensitive === 'scissor' && computerSelection === 'rock') {
        compScore += 1;
    } else if (playerSelectionInsensitive === 'paper' && computerSelection === 'scissor') {
        compScore += 1;
    }

    console.log(playerScore, compScore);
*/


/*
rules();
        if (playerSelection == computerSelection) {
            return 'tied, no one gets points';
        } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
            return playerScore += 1;
        } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
            return playerScore += 1;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return playerScore += 1;
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return compScore += 1;
        } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
            return compScore += 1;
        } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
            return compScore += 1;
        }
*/

/*
playerSelection picks weapon
computerSelection picks weapon
    if playerSelection is rock & computerSelection is scissor print "Player wins"

*/