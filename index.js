let scoreStr = localStorage.getItem("score");
let score;
resetScore();

// Gentate Computer Choice

function genrateComputerChoice() {
  let rendomNumber = Math.random() * 3;
  if (rendomNumber > 0 && rendomNumber <= 1) {
    return "bat";
  } else if (rendomNumber > 1 && rendomNumber <= 2) {
    return "ball";
  } else {
    return "stump";
  }
}

// Bat function

function bat() {
  let computerChoice = genrateComputerChoice();
  let resultMsg = getResult("bat", computerChoice);
  showResult("bat", computerChoice, resultMsg);
}

// Ball function
function ball() {
  let computerChoice = genrateComputerChoice();
  let resultMsg = getResult("ball", computerChoice);
  showResult("ball", computerChoice, resultMsg);
}

// stump function
function stump() {
  let computerChoice = genrateComputerChoice();
  let resultMsg = getResult("stump", computerChoice);
  showResult("stump", computerChoice, resultMsg);
}

//  Genrate Result

function getResult(userMove, computerMove) {
  if (userMove === "bat") {
    if (computerMove === userMove) {
      score.tie++;

      return `It's tie`;
      //  console.log(result);
    } else if (computerMove === "ball") {
      score.win = score.win++;
      return "user won";

      // console.log(result);
    } else if (computerMove === "stump") {
      score.lost++;
      return "Computer won";
    }
  } else if (userMove === "ball") {
    if (computerMove === userMove) {
      score.tie++;
      return `It's tie`;
      //  console.log(result);
    } else if (computerMove === "bat") {
      score.lost++;
      return "Computer won";
      // console.log(result);
    } else if (computerMove === "stump") {
      score.win++;
      return "user won";
    }
  } else {
    if (computerMove === userMove) {
      score.tie++;
      return `It's tie`;
      //  console.log(result);
    } else if (computerMove === "bat") {
      score.lost++;
      return "Computer won";
      // console.log(result);
    } else if (computerMove === "ball") {
      score.win++;
      return "user won";
    }
  }
}

// Show Result

function showResult(userMove, computerMove, result) {
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector("#user-move").innerText =      userMove ? `You have chosen ${userMove}.`: '';

  document.querySelector("#computer-move").innerText =  computerMove ? `Computer choice is ${computerMove}`: '';

  document.querySelector("#result").innerText = result ? result : '';

  document.querySelector("#score").innerText = score.displayScore();

  // alert(`You have chosen ${userMove}. Computer choice is ${computerMove} => ${result}

  // ${score.displayScore()}
  // `);
}

// Reset Score function

function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };
 
  score.displayScore = () => {
    return `${score.win}${score.lost}${score.tie}`;
  };
}

// Reset Btn function
function resetBtn(){
  localStorage.clear();
  resetScore();
}
