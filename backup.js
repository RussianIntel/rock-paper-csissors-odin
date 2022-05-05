let win_Array = [[0,2,1],
                    [1,0,2],
                    [2,1,0]];
    let results = win_Array[playerChoice][computerRandom];
    if (results == 0) {
        roundWinner.textContent = `It's a tie`;
    }  
    else if (results == 1) {
        roundWinner.textContent = `You Won`;
        playerScore++;
    }
    else if (results == 2) {
        roundWinner.textContent = `You Lost`;
        computerScore++;
    }