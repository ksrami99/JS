let randomeNumber =parseInt(Math.random() * 100 + 1); 

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let privGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click' , (e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid number')
    } else if(guess < 1){
        alert('Please Enter a number more then 1')
    } else if(guess > 100){
        alert('Please Enter a number less then 100')
    } else{
        privGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over, Randome number was ${randomeNumber}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){

    if(guess == randomeNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomeNumber){
        displayMessage(`Number is Tooo Low`)
    
    }else if(guess > randomeNumber){
        displayMessage(`Number is Tooo High`)
    }

}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess} ` 
    numGuess++
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(guess){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        randomeNumber =parseInt(Math.random() * 100 + 1)
        privGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

