let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = '';

    if ((playerSelection == 'rock' && computerSelection =='scissors') || 
    (playerSelection == 'paper' && computerSelection =='rock') || 
    (playerSelection == 'scissors' && computerSelection =='paper')) {

        playerScore += 1;
        result = ('You win! <br><br>' + playerSelection + ' beats ' + computerSelection + '<br><br>Player score: ' + 
                        playerScore + '<br>Computer score: ' + computerScore);
        
        if (playerScore == 5) {
            result += '<br><br>You won the game!<br> Reload the page to play again.';
            disableButtons();
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. <br><br>You both chose ' + playerSelection + '<br><br>Player score: ' + playerScore + 
                    '<br>Computer score: ' + computerScore);
    }
    else {
        computerScore += 1;
        result = ('You lose! <br><br>' + computerSelection + ' beats ' + playerSelection +
                '<br><br>Player score: ' + playerScore + '<br>Computer score: ' + computerScore);
    
        if (computerScore == 5) {
            result += '<br><br>Machine WINS the game! Reload the page to play again.';
            disableButtons();
        }

    }

    document.getElementById('result').innerHTML = result;
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value);
    })
});




    




