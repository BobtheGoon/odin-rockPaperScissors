const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let number = Math.floor(Math.random()*3);
    return choices[number]
}


function playRound(playerSelection, computerSelection) {
    if (choices.includes(playerSelection)){

        playerNum = choices.indexOf(playerSelection, 0)
        computerNum = choices.indexOf(computerSelection, 0)
        if (playerNum == computerNum) {
            return 'Its a tie!'
        }
        else if (playerNum == 0 && computerNum == 2 || playerNum == 1 && computerNum == 0 || playerNum == 2 && computerNum == 1){
            return `You win, ${playerSelection} beats ${choices[computerNum]}!`
        }

        else {
            return `You lose, ${computerSelection} beats ${playerSelection}`
        }
    }
    else {
        return 'Seems like you misstyped your selection.'
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay()
        let playerSelection = prompt('Choose: Rock, paper or scissors').toLowerCase();
        playRound(playerSelection, computerSelection)

        console.log(playRound(playerSelection, computerSelection))
    }
}

game()
