function computerPlay() {
    computerSelection = Math.random();

        if (computerSelection < 0.34){
          computerSelection = 'Rock';
        }
        else if(computerSelection >0.34 <= 0.67){
          computerSelection = 'Paper';
        }
        else{
          computerSelection = 'Scissors';
        }
    return computerSelection;
  }
  
  // asks the user enter his choise
  function playerSelection() {
    let playerChoice = prompt('Enter one of the following to play: Rock, Paper or Scissors').toLowerCase();
    return playerChoice;
  }
  
  function playRound(computerPlay, playerSelection) {
    console.log("Computer choice: " + computerPlay);
    console.log("Player choice: " + playerSelection);
    let result = 0;

    if (player === computer){
      return 'Draw';
  }
  if (player === 'Rock'){
      if (computer=== 'Paper'){
          return 'Computer';
      }
      else{
          return 'Player';}
      }
  
  if (player === 'Paper'){
      if (computer === 'Scissors'){
          return 'Computer';
      }
      else {
          return 'Player';
      }
  } 

  if (player === 'Scissors'){
      if (computer === 'Rock'){
          return 'Computer';
      }
      else{
          return 'Player';
      }
    }
    return result;
  }
  
  function game() {
    var result = 0;
    var winningCount = 0;
    for (var playRoundsCount = 1; playRoundsCount <= 5; playRoundsCount++) {
      console.log("Wins number: " + winningCount);
      result = playRound(computerPlay(), playerSelection());
      console.log(result);

      if (result == "You win") {
        winningCount++;
      }
      console.log('Plays Count: ' + playRoundsCount);
  
      if (winningCount >= 3) {
        playRoundsCount = 5;
        console.log("The Player wins the best of 5");
      } 
      else if (winningCount < 3 && playRoundsCount == 5) {
        console.log("Computer wins the best of 5");
      }
    }
  }
  
  game();