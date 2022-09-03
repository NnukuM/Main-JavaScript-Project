console.log(`Welcome player one!`);

//computer play function

function computerPlay() {
  let sign = '';
  let key = 0;
  key = Math.floor(Math.random() * 3) + 1;

  switch (key) {
    case 1:
      sign = 'Rock';
      break;
    case 2:
      sign = 'Paper';
      break;

    default:
      sign = 'Scissors';
      break;
  }
  return sign;
}

// function that plays a single round of Rock Paper Scissors.

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();
  
  if (player === computer) {
    return `It is a tie! ${player[0].toUpperCase()}${player.slice(
      1
    )} and ${computer}`;
  } else if (player === 'rock' && computer === 'scissors') {
    return `Wow You Win! ${player[0].toUpperCase()}${player.slice(
      1
    )} beats ${computer}`;
  } else if (player === 'paper' && computer === 'rock') {
    return `WoW You Win! ${player[0].toUpperCase()}${player.slice(
      1
    )} beats ${computer}`;
  } else if (player === 'scissors' && computer === 'paper') {
    return `WoW You Win! ${player[0].toUpperCase()}${player.slice(
      1
    )} beats ${computer}`;
  } else if (player === 'rock' && computer === 'paper') {
    return `You Loose! ${player[0].toUpperCase()}${player.slice(
      1
    )} looses to ${computer}`;
  }
  if (player === 'scissors' && computer === 'rock') {
    return `You Loose! ${player[0].toUpperCase()}${player.slice(
      1
    )} looses to ${computer}`;
  } else if (player === 'paper' && computer === 'scissors') {
    return `You Loose! ${player[0].toUpperCase()}${player.slice(
      1
    )} looses to ${computer}`;
  }
}

const playerSelection = 'paper';

//play a 5 round game

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(`*********** Game ${i + 1} **********`);
    console.log(playRound(playerSelection, computerPlay()));
  }
}

game();