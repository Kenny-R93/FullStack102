const hands = ['Rock', 'Paper', 'Scissors'];

function getHand() {
  return hands[parseInt(Math.random() *3)];
};

const userChoiceDisplay = document.getElementById("User-Hand");
const computerChoiceDisplay = document.getElementById("Computer-Hand");
const resultDisplay = document.getElementById("Result");

function playRound(player1, player2) {
  const player1Hand = player1.getHand();
  const player2Hand = player2.getHand();
 let winner;
  
 if (player1Hand === 'Rock' && player2Hand === 'Paper') {           // Gets hands from each
    winner = player2.name;        // Determines the winner
    //console.log(winner + " is the winner!");         // Logs the hands played and name of the winner.
    resultDisplay.textContent = `Computer is the winner!`;
    return winner;          // Returns the winner object (null if no winner)
}
if (player1Hand === 'Rock' && player2Hand ==='Scissors') {
    winner = player1.name;
    //console.log(winner + " is the winner!");
    resultDisplay.textContent = `Player is the winner!`;
    return winner;
    }
 if (player1Hand === 'Paper' && player2Hand === 'Rock') {
winner = player1.name;
//console.log(winner + " is the winner!");
    resultDisplay.textContent = `Player is the winner!`;
    return winner;
} 
if (player1Hand === 'Paper' && player2Hand === 'Scissors') {
    winner = player2.name;
    //console.log(winner + " is the winner!");
    resultDisplay.textContent = `Computer is the winner!`;
    return winner;
    }
 if (player1Hand === 'Scissors' && player2Hand ==='Rock') {
winner = player2.name;
//console.log(winner + " is the winner!");
    resultDisplay.textContent = `Computer is the winner!`;
    return winner;
}
 if (player1Hand === 'Scissors' && player2Hand === 'Paper') {
winner = player1.name;
    //console.log(winner + " is the winner!");
    resultDisplay.textContent = `Player is the winner!`;
    return winner;
}
if (player1Hand === player2Hand) {          // Gets hands from each
    winner = "It's a tie!"
    //console.log("It's a tie!");         // Logs the hands played and "it's a tie".
        // Returns the winner object (null if no winner) // Determines the winner
    resultDisplay.textContent = `It's a tie!`;
    return winner;
}

};

const possibleChoices = document.querySelectorAll('.button');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  const userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  const player1 = {name: "player", getHand: () => userChoice};
  const player2 = {name: "computer", getHand: getHand};
  const result = playRound(player1, player2);
  computerChoiceDisplay.innerHTML = player2.getHand();
}));