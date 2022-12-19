let playerScore = 0
let compScore = 0


function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors']
    const computerChoice = array[Math.floor(Math.random()*array.length)]
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    let result = ''


    if (playerSelection === computerSelection) {

        result = 'It\'s a tie game'

    } else if ((playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'rock')) {

        result = `You win! ${playerSelection} beats ${computerSelection}!`
        playerScore += 1
        document.querySelector('#player').innerText = playerScore

    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}!`
        compScore += 1
        document.querySelector('#computer').innerText = compScore
    }

    return result

}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', ()=> {
    const div = document.querySelector('.result')
    div.innerText = playRound(button.id, getComputerChoice())

    if (playerScore == 5) {
        let final = document.createElement('div')
        final.innerText = 'You have won the battle and save humanity!'
        document.body.appendChild(final)
        document.querySelector('#container').remove()
        document.querySelector('.result').remove()
    } else if (compScore == 5) {
        let final = document.createElement('div')
        final.innerText = 'You have lost the battle to the Machine and betray humanity!'
        document.body.appendChild(final)
        document.querySelector('#container').remove()
        document.querySelector('.result').remove()
        
    }
}))

if (playerScore == 5) {
    document.querySelector('.result').innerText = 'You have won the battle and save humanity!'
} else if (compScore == 5) {
    document.querySelector('.result').innerText = 'You have lost the battle to the Machine and betray humanity!'
}
