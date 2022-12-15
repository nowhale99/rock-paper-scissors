

function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors']
    const computerChoice = array[Math.floor(Math.random()*array.length)]
    return computerChoice
}

const playerSelection = prompt('Choose your weapon!').toLowerCase()
const computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    let result = ''


    if (playerSelection === computerSelection) {

        result = 'It\'s a tie game'

    } else if ((playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'rock')) {

        result = `You win! ${playerSelection} beats ${computerSelection}!`

    } else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}!`
    }

    return result

}

console.log(playRound(playerSelection, computerSelection))