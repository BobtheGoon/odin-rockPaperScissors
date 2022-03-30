function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    return choices[number];
}


function playRound(playerSelection, computerSelection) {
    if (choices.includes(playerSelection)) {

        playerNum = choices.indexOf(playerSelection, 0);
        computerNum = choices.indexOf(computerSelection, 0);
        if (playerNum == computerNum) {
            return ['Its a tie!', 'tie'];
        }
        else if (playerNum == 0 && computerNum == 2 || 
                    playerNum == 1 && computerNum == 0 || 
                    playerNum == 2 && computerNum == 1) {
            return [`You win, ${playerSelection} beats ${choices[computerNum]}!`, 'player'];
        }

        else {
            return [`You lose, ${computerSelection} beats ${playerSelection}`, 'computer'];
        }
    }
}


function createElement(result) {
    const para = document.createElement('p');
    const node = document.createTextNode(result);

    para.appendChild(node);
    document.getElementById('games').appendChild(para);

}


function updateScore(playerScore, computerScore) {
    div = document.getElementById('score');
    div.innerText = `Score = Player : ${playerScore}, Computer : ${computerScore}`;
}


function gameOver(playerScore, computerScore) {
    if (playerScore >= 5 || computerScore >= 5) {
        endGame = true;
        if (playerScore > computerScore) {
            winner = 'player'
        }
        else {
            winner = 'computer'
        }
        createElement(`Game over! The ${winner} won!`);
    }
}


function game() {
    let games = 0;
    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
            computerSelection = computerPlay();
            if (!endGame) {
                result = playRound(playerSelection, computerSelection);
                createElement(result[0]);
                games += 1

                if (result[1] === 'player') {
                    playerScore += 1;
                }
                else if (result[1] === 'computer') {
                    computerScore += 1;
                }

                updateScore(playerScore, computerScore);
                gameOver(playerScore, computerScore);
            }
        })
    })
}

const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
endGame = false
game();
