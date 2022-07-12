const names = ['Rock', 'Paper', 'Scissors'];
const heading = document.querySelector('h4');
const computer = document.querySelector('.computer')
const player = document.querySelector('.player')


function computerPlay() {
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  return choice;
}

function playRound(playerSelection, computerSelection) {

  playerSelection = prompt("Rock, Paper, Scissors");
  computerSelection = computerPlay();
  
  alert(` Computer: ${computerSelection}   Player: ${playerSelection}`);

  if (playerSelection === 'Rock' && computerSelection === 'Rock') {
    return 'This is a tie!';
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
    return 'This is a tie!';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
    return 'This is a tie!'
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return 'You lose! Paper beats Rock';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'You Win! Paper beats Rock';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return 'You Win! Rock beats Scissors';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return 'You lose! Rock beats Scissors';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return 'You lose! Scissors beats Paper';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return 'You win! Scissors beats Paper';
  }
  else {
    return 'Boo Bitch!';
  }
}

let playerScore = 0;

let computerScore = 0;

function game() {

  for (let i = 0; i < 5; i++) 
  { result = playRound(); 
    if (result === 'You lose! Paper beats Rock' ||
        result === 'You lose! Scissors beats Paper' ||
        result === 'You lose! Rock beats Scissors') {
      computerScore ++;
    } else if ( result === 'You Win! Paper beats Rock' ||
        result === 'You Win! Rock beats Scissors' ||
        result === 'You win! Scissors beats Paper') {
      playerScore ++;
    } 
  }
  player.textContent = playerScore;
  computer.textContent = computerScore;

  if (playerScore > computerScore){
    return 'You Win!';
  } else if (playerScore === computerScore){
    return 'Its a Draw!';
  } else {
    return 'You Lose!';
  }
}

heading.textContent = game();