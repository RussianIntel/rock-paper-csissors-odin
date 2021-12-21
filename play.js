let playerEntry = window.prompt ("Would you like to play Rock, Paper, Scissors vs the Machine?");
let playerChoice = playerEntry.toLowerCase;
let computerChoices = ['rock', 'paper', 'scissors'];
let computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];
function computerPlay () {
    if (playerChoice != 'rock' || 'paper' || 'scissors') {
        alert('You need to enter either Rock, Paper or Scissors, but yet, you entered:' + '  ' + playerEntry);
    }
    else if (playerChoice == computerRandom) {
        alert('Its a tie!  You played:' + ' ' + playerEntry + 'Computer played:' + ' ' + computerRandom);
    }
    else if (playerChoice == 'rock' && computerRandom == 'scisors') {
        alert('You win!  You played:' + ' ' + playerEntry + 'Computer played:' + ' ' + computerRandom);
    }
    else if (playerChoice == 'paper' && computerRandom == 'rock') {
        alert('You win! You played:' + ' ' + playerEntry + 'Computer played:' + ' ' + computerRandom);
    }    
    else if (playerChoice == 'scissors' && computerRandom == 'paper') {
        alert('You win!  You played:' + ' ' + playerEntry + 'Computer played:' + ' ' + computerRandom);
    }
 
    else {
        alert('You loose!  You played:' + ' ' + playerEntry + 'Computer played:' + ' ' + computerRandom);
    }

}
let resutls = computerPlay();




console.log (resutls);