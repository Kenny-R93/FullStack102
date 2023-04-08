const hands = ['rock', 'paper', 'scissors'];            // Define a hands array with the values 'rock', 'paper', and 'scissors';

function getHand() {            // Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
    return hands[parseInt(Math.random()*10)%3];
};

let player1 = {name: "player 1", getHand: getHand()};   // Define two objects for two players. Each player has name and getHand() properties.
let player2 = {name: "player 2", getHand: getHand()};
let player3 = {name: "player 3", getHand: getHand()};
let player4 = {name: "player 4", getHand: getHand()};

function playRound(player1, player2) {          // Define a function called playRound() that:
    let player1Hand = player1.getHand;          // Takes two player objects as arguments
    let player2Hand = player2.getHand;
    let winner = null;
    console.log(player1.name + " plays " + player1Hand);            // Logs the hands played
    console.log(player2.name + " plays " + player2Hand);            // Logs the hands played
    if (player1Hand === player2Hand) {          // Gets hands from each
        console.log("It's a tie!");         // Logs the hands played and "it's a tie".
        return winner;          // Returns the winner object (null if no winner) // Determines the winner
    }
    else if (player1Hand === 'rock' && player2Hand === 'paper') {           // Gets hands from each
        winner = player2.name;        // Determines the winner
        console.log(winner + " is the winner!");         // Logs the hands played and name of the winner.
        return winner;          // Returns the winner object (null if no winner)
    }
        else if (player2Hand ==='scissors') {
        winner = player1.name;
        console.log(winner + " is the winner!");
        return winner;
        }
    else if (player1Hand === 'paper' && player2Hand === 'rock') {
    winner = player1.name;
    console.log(winner + " is the winner!");
    return winner;
    }
        else if ( player2Hand === 'scissors') {
        winner = player2.name;
        console.log(winner + " is the winner!");
        return winner;
        }
    else if (player1Hand === 'scissors' && player2Hand ==='rock') {
    winner = player2.name;
    console.log(winner + " is the winner!");
    return winner;
    }
        else if (player1Hand === 'scissors' && player2Hand === 'paper') {
        winner = player1.name;
            console.log(winner + " is the winner!");
            return winner;
        }
};

playRound(player1, player2);

function playGame(player1, player2, playUntil) {            // **Pt2** 1. Define a function called playGame() that takes arguments player1, player2, and playUntil.
    let Player1Score = 0;
    let Player2Score = 0;

    while (Player1Score < playUntil || Player2Score < playUntil) {          // **Pt2** Play rounds until one of the players wins playUntil hands
        let overallWinner = playRound(player1, player2);
        if (overallWinner === null) {}
        else if (overallWinner.name === player1.name) {Player1Score++;}
        else if (overallWinner.name === player2.name) {Player2Score++;};
    }
    if (Player1Score === playUntil) {           // **Pt2** When one player has won enough games, return the winning player object // **Pt2** Play a game to 3 wins
        return player1;
    }else{
        return player2;
    };
};
function playTournament(player1, player2, player3, player4, playUntil) {            // **Pt2** Define a function called playTournament() // Take 4 players and playUntil as arguments
    let Round1 = playGame(player1, player2, playUntil);             // **Pt2** Play a game between the first two players, and the second two players
    let Round2 = playGame(player3, player4, playUntil);             // **Pt2** Play a game between the winners of the first round.
    let FinalRound = playGame(Round1, Round2, playUntil);
    return FinalRound;
};

let FinalRound = playTournament(player1, player2, player3, player4)
console.log(FinalRound.name + " is the World Champion!!!");             // **Pt2** Announce the tournament winner's name "[name] is the world champion";
playTournament();



