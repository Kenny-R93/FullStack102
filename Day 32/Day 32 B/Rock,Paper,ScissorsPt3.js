const hands = ['rock', 'paper', 'scissors'];            // Define a hands array with the values 'rock', 'paper', and 'scissors';

function getHand() {            // Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
    return hands[parseInt(Math.random()*10)%3];
};


const player1 = {name: "player 1", getHand: getHand()};   // Define two objects for two players. Each player has name and getHand() properties.
const player2 = {name: "player 2", getHand: getHand()};

function playRound(player1, player2) {          // Define a function called playRound() that:
    const player1Hand = player1.getHand();          // Takes two player objects as arguments
    const player2Hand = player2.getHand();
    let winner = null;
    // console.log(player1.name + " plays " + player1Hand);            // Logs the hands played
    // console.log(player2.name + " plays " + player2Hand);            // Logs the hands played
    if (player1Hand === player2Hand) {          // Gets hands from each
        // console.log("It's a tie!");         // Logs the hands played and "it's a tie".
        return winner;          // Returns the winner object (null if no winner) // Determines the winner
    }
    else if (player1Hand === 'rock' && player2Hand === 'paper') {           // Gets hands from each
        winner = player2.name;        // Determines the winner
        resultDisplay.innerHTML = winner + " is the winner!";// console.log(winner + " is the winner!");         // Logs the hands played and name of the winner.
        return winner;          // Returns the winner object (null if no winner)
    }
        else if (player2Hand ==='scissors') {
        winner = player1.name;
        resultDisplay.innerHTML = winner + " is the winner!";// console.log(winner + " is the winner!");
        return winner;
        }
    else if (player1Hand === 'paper' && player2Hand === 'rock') {
    winner = player1.name;
    resultDisplay.innerHTML = winner + " is the winner!";// console.log(winner + " is the winner!");
    return winner;
    }
        else if ( player2Hand === 'scissors') {
        winner = player2.name;
        resultDisplay.innerHTML = winner + " is the winner!";// console.log(winner + " is the winner!");
        return winner;
        }
    else if (player1Hand === 'scissors' && player2Hand ==='rock') {
    winner = player2.name;
    resultDisplay.innerHTML = winner + " is the winner!";// console.log(winner + " is the winner!");
    return winner;
    }
        else if (player1Hand === 'scissors' && player2Hand === 'paper') {
        winner = player1.name;
        resultDisplay.innerHTML = winner + " is the winner!";// console.log(winner + " is the winner!");
            return winner;
        }
    };


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  const userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  const player1 = {name: "player 1", getHand: () => userChoice};
  const player2 = {name: "computer", getHand: getHand};
  const result = playRound(player1, player2);
  computerChoiceDisplay.innerHTML = player2.getHand();
}));