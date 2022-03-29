function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    return choices[number];
}


function playRound(playerSelection, computerSelection) {
    if (choices.includes(playerSelection)) {

        playerNum = choices.indexOf(playerSelection, 0);
        computerNum = choices.indexOf(computerSelection, 0);
        if (playerNum == computerNum) {
            return 'Its a tie!';
        }
        else if (playerNum == 0 && computerNum == 2 || 
                    playerNum == 1 && computerNum == 0 || 
                    playerNum == 2 && computerNum == 1) {
            return `You win, ${playerSelection} beats ${choices[computerNum]}!`;
        }

        else {
            return `You lose, ${computerSelection} beats ${playerSelection}`;
        }
    }
    else {
        return 'Seems like you misstyped your selection.';
    }
}


function createElement(result) {
    const para = document.createElement('p');
    const node = document.createTextNode(result);

    para.appendChild(node)
    document.getElementById('container').appendChild(para)

}


const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');


//buttons.forEach((button) => {
//    button.addEventListener('click', () => {
//        playerSelection = button.id;
//        computerSelection = computerPlay();
//        result = playRound(playerSelection, computerSelection);
//        createElement(result);
//    })
//})



function game() {
    let games = 0;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
            computerSelection = computerPlay();
            result = playRound(playerSelection, computerSelection);
            createElement(result);
        })
    })
    console.log(games)
}

game();
