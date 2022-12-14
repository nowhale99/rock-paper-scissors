function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors']
    const computerChoice = array[Math.floor(Math.random()*array.length)]
    console.log(computerChoice)
}