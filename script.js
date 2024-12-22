"use strict";
let number = Math.trunc(Math.random() * 20 + 1);
const revealNum = document.querySelector(".number");

let score = 20;
let highscore = 0;

function displayMessage(content) {
  document.querySelector(".message").textContent = content;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("😢 Try inputting a value");
  } else if (guess === number) {
    revealNum.textContent = number;
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#d9b6ff";

    // HIGHSCORE

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "😥 Too high!" : "😥 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🤕 Game Over!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing!");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#fef8f8";
});
