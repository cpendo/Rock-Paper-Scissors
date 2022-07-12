const names = ['Rock', 'Paper', 'Scissors'];
const para = document.querySelector('p');
const heading = document.querySelector('h4');

function computerPlay(){
  const randomNumber = Math.floor(Math.random() * names.length);
  const choice = names[randomNumber];
  return choice;
}

function playRound(playerSelection, computerSelection) {

  playerSelection = prompt("Rock, Paper, Scissors");
  computerSelection = computerPlay();
  heading.textContent = ` Computer: ${computerSelection} Player: ${playerSelection}`;

  if (playerSelection === 'Rock' && computerSelection === 'Rock'){
    return 'This is a tie!';
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper'){
    return 'This is a tie!';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors'){
    return 'This is a tie!'
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
    return 'You lose! Paper beats Rock';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
    return 'You Win! Paper beats Rock';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
    return 'You Win! Rock beats Scissors';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
      return 'You lose! Rock beats Scissors';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
    return 'You lose! Scissors beats Paper';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
    return 'You win! Scissors beats Paper';
  } 
  else {
  return 'Boo Bitch!';
    }
    
  } 



para.textContent = playRound();