function computerPlay(){
    const names = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * names.length);
    const choice = names[randomNumber];
    return choice;
}

const buttons = document.querySelectorAll('button');
let playerSelection = buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    })
})

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

let playerScore = 0;
let computerScore = 0;
const computer = document.querySelector('.computer');
const player = document.querySelector('.player');
const heading = document.querySelector('h4');
const para = document.querySelector('h5');

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    let result = "";

   if (playerSelection === 'rock' && computerSelection === 'rock' ||
        playerSelection === 'paper' && computerSelection === 'paper' ||
        playerSelection === 'scissors' && computerSelection === 'scissors'){
            result = ("this is a tie");
        } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
                    playerSelection === 'paper' && computerSelection === 'rock'|| 
                    playerSelection === 'scissors' && computerSelection === 'paper'){
                        playerScore++;
                        result = (`you win! ${playerSelection} beats ${computerSelection}`);
        } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
                    playerSelection === 'paper' && computerSelection === 'scissors' ||
                    playerSelection === 'scissors' && computerSelection === 'rock'){
                        computerScore++;
                        result = (`you lose! ${computerSelection} beats ${playerSelection}`);
    } else{
        alert("OOPS! LOOKS LIKE AN ERROR");
    }

    player.textContent = playerScore;
    computer.textContent = computerScore;
    heading.textContent = result;

    if (playerScore === 5 ){
        para.textContent = "GaMe OvEr! YoU wOn ! ReLoAd PaGe To PlAy AgAiN";
        disableButtons();
    } else if (computerScore === 5 ){
        para.textContent = "GaMe OvEr! CoMpUtEr wOn ! ReLoAd PaGe To PlAy AgAiN";
        disableButtons();
    }
};
