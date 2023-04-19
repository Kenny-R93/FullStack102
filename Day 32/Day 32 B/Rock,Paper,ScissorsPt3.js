const hands = ['rock', 'paper', 'scissors'];

function getHand() {
  
  return hands[parseInt(Math.random() * 10) % 3];
};

const userChoiceDisplay = document.getElementById("User-Hand");
const computerChoiceDisplay = document.getElementById("Computer-Hand");
const resultDisplay = document.getElementById("Result");

function playRound(player1, player2) {
  
  const player1Hand = player1.getHand();
  const player2Hand = player2.getHand();
  let winner = null;

  if (player1Hand === player2Hand) {
   
    resultDisplay.innerHTML = "It's a tie!";
    return winner;
  } else if (player1Hand === 'rock' && player2Hand === 'paper') {
    winner = player2.name;
    resultDisplay.innerHTML = winner + " is the winner!";
    return winner; 
  } else if (player2Hand === 'scissors') {
    winner = player1.name;
    resultDisplay.innerHTML = winner + " is the winner!";
    return winner;
  } else if (player1Hand === 'paper' && player2Hand === 'rock') {
    winner = player1.name;
    resultDisplay.innerHTML = winner + " is the winner!";
    return winner;
  } else if (player2Hand === 'scissors') {
    winner = player2.name;
    resultDisplay.innerHTML = winner + " is the winner!";
    return winner;
  } else if (player1Hand === 'scissors' && player2Hand === 'rock') {
    winner = player2.name;
    resultDisplay.innerHTML = winner + " is the winner!";
    return winner;
  } else if (player1Hand === 'scissors' && player2Hand === 'paper') {
    winner = player1.name;
    resultDisplay.innerHTML = winner + " is the winner!";
    return winner;
  }
};

const possibleChoices = document.querySelectorAll('.button');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  const userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  const player1 = {name: "player 1", getHand: () => userChoice};
  const player2 = {name: "computer", getHand: getHand};
  const result = playRound(player1, player2);
  computerChoiceDisplay.innerHTML = player2.getHand();
}));