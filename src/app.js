import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var suits = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
  var values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomValues = Math.floor(Math.random() * 12);
  let randomSuits = Math.floor(Math.random() * 4);

  document.querySelector(".top-icon").innerHTML = suits[randomSuits];
  document.querySelector(".bottom-icon").innerHTML = suits[randomSuits];
  document.querySelector(".number").innerHTML = values[randomValues];
  console.log("Hello Rigo from the console!");

  if (randomSuits == 1 || randomSuits == 3) {
    document.querySelector(".top-icon").style.color = "red";
    document.querySelector(".bottom-icon").style.color = "red";
    document.querySelector(".number").style.color = "red";
  }
};
