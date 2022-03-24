const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let number = Math.floor(Math.random()*3);
    return choices[number]
}

let computerSelection = computerPlay()
let playerSelection = prompt('Choose: Rock, paper or scissors').toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Its a tie!'
    }
    
}