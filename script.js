"use strict";

let realNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);
  if (score > 1) {
    if (guess < 1 || guess > 20) {
      document.querySelector(".message").textContent = "Not a number";
    } else if (guess == realNumber) {
      document.querySelector(".message").textContent = "Correct Number";
      document.querySelector("body").style.backgroundColor = "darkgreen";
      document.querySelector(".number").textContent = realNumber;
      document.querySelector(".number").style.width = "60rem";
      if (
        document.querySelector(".highscore").textContent <=
        document.querySelector(".score").textContent
      ) {
        document.querySelector(".highscore").textContent =
          document.querySelector(".score").textContent;
      }
      document.querySelector(".score").textContent = 20;
    } else {
      document.querySelector(".message").textContent =
        guess > realNumber ? "Lower" : "Higher";
      document.querySelector("body").style.backgroundColor = "darkred";
      document.querySelector(".score").textContent = --score;
    }
  } else {
    score = 0;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "You lose";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  realNumber = Math.trunc(Math.random() * 20) + 1;
});
