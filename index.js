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

    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}!`
    }

    return result

}

function game() {

    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++){
        const result = playRound(prompt('Choose your weapon!').toLowerCase(), getComputerChoice())
        console.log(result)
        console.log(result.charAt(4))
        if (result.charAt(4) === 'w') {
            playerScore += 1
        } else if (result.charAt(4) === 'l') {
            computerScore += 1
        }
        console.log(playerScore + ' - ' + computerScore)
    }
    if (playerScore > computerScore) {
        console.log('Victory is Yours!')
    }else if (computerScore > playerScore) {
        console.log('What a shame, you was defeated by Machine!')
    } else {
        console.log('Nobody survived in this war...')
    }
    
}
game()
