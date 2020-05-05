const header = document.querySelector("h1");
const p1Dice = document.querySelector(".player1-dice");
const p2Dice = document.querySelector(".player2-dice");
const rollButton = document.querySelector("button");
const imageArray = [
  "images/dice1.png", "images/dice2.png", "images/dice3.png",
  "images/dice4.png", "images/dice5.png", "images/dice6.png"
  ]

function randomNumber() {
  return Math.ceil(Math.random() * 6);
}

function getDice(num1, num2) {
  p1Dice.setAttribute("src", imageArray[num1 - 1]);
  p2Dice.setAttribute("src", imageArray[num2 - 1]);
}

function pickWinner(num1, num2) {
  if (num1 > num2){
    header.innerText = "Player 1 Wins!";
  } else if (num1 < num2){
    header.innerText = "Player 2 Wins!";
  } else if (num1 === num2) {
    header.innerText = "Tie...";
  }
}

rollButton.onclick = function() {
  let p1 = randomNumber();
  let p2 = randomNumber();
  getDice(p1, p2);
  pickWinner(p1, p2);
}
