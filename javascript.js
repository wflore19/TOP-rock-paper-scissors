    let playerScore = 0;
    let computerScore = 0;
    
    function computerPlay() {
    const compMove = ['rock', 'paper', 'scissor'];
    const randomMove = compMove[(Math.random() * compMove.length) | 0];

    return randomMove;
}

function result(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
            playerScore += 1
            console.log('You win! ' + playerSelection + ' beats ' + computerSelection)
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'scissor' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissor')) {
            computerScore += 1
            console.log('You lose! ' + computerSelection + ' beats ' + playerSelection)
    }
    else {
        console.log('Tied, no points')
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
        console.log('player: ' + playerScore, 'computer: ' + computerScore);
    }

    if (playerScore == computerScore) {
        console.log('Final result: Tied')
    }
    else if (playerScore > computerScore) {
        console.log('Final result: Player wins')
    }
    else {
        console.log('Final result: Computer wins')
    }
}