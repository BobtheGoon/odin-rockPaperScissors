const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let number = Math.floor(Math.random()*3);
    return choices[number]
}

console.log(computerPlay())