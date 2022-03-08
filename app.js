const compChDisplay = document.getElementById('computer-choice')
const usrChDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let usrCh
let computerChoice
let result


possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    usrCh = e.target.id
    usrChDisplay.innerHTML = usrCh
    genComputerChoice()
    getResult()
}))

function genComputerChoice() {
    const randromNumber = Math.floor(Math.random() * 3) + 1

    if (randromNumber === 1) {
        computerChoice = 'rock'
    }

    if (randromNumber === 2) {
        computerChoice = 'scisors'
    }

    if (randromNumber === 3) {
        computerChoice = 'paper'
    }

    compChDisplay.innerHTML = computerChoice

}


function getResult() {
    if (computerChoice === usrCh) {
        result = 'its a draw!'
    }

    if (computerChoice === 'rock' && usrCh === 'scisors') {
        result = 'you lost!'
    }
    if (computerChoice === 'rock' && usrCh === 'paer') {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && usrCh === 'scisors') {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && usrCh === 'rock') {
        result = 'you lost!'
    }
    if (computerChoice === 'scisors' && usrCh === 'rock') {
        result = 'you win!'
    }
    if (computerChoice === 'scisors' && usrCh === 'paper') {
        result = 'you lost!'
    }
    resultDisplay.innerHTML = result
}