compResp = document.getElementById("computer-response").innerHTML;
winResp = document.getElementById("win-response");

function game(move) {
  winResp.innerHTML = "";
  compResp.innerHTML = "";
 var compMove = Math.floor(Math.random()*3 + 1);
  switch(compMove) {
    case 1:
      compMove = "Rock";
      document.getElementById('computer-pick').src = "http://www.rock-paper-scissors-game.com/i/rock.png";
        switch(move) {
          case 1: winResp.innerHTML = "You tied! Play again?"; break;
          case 2: winResp.innerHTML = "You Won! :D"; break;
          case 3: winResp.innerHTML = "You Lost! :("; break;
        }
      break;
    case 2:
      compMove = "Paper";
      document.getElementById('computer-pick').src = "http://www.rock-paper-scissors-game.com/i/paper.png";
        switch(move) {
          case 1: winResp.innerHTML = "You Lost! :("; break;
          case 2: winResp.innerHTML = "You tied! Play again?"; break;
          case 3: winResp.innerHTML = "You Won! :D"; break;
        }
      break;
    case 3:
      compMove = "Scissors";
      document.getElementById('computer-pick').src = "http://www.rock-paper-scissors-game.com/i/scissors.png";
      switch(move) {
        case 1: winResp.innerHTML = "You Won! :D"; break;
        case 2: winResp.innerHTML = "You Lost! :("; break;
        case 3: winResp.innerHTML = "You tied! Play again?"; break;
      }
      break;
  }
  if (compMove === move) {
    winResp.innerHTML = "You Tied! Play Again!"
  }
}
