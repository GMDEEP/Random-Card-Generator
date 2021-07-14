/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var topCard = document.querySelector("#topCard");
  var middleCard = document.querySelector("#middleCard");
  var bottomCard = document.querySelector("#bottomCard");
  var displaySuite = topCard,
    bottomCard;
  var suitesArray = ["♦", "♥", "♠", "♣"];
  var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var randomSuite = Math.floor(Math.random() * suitesArray.length);
  var randomNum = Math.floor(Math.random() * numArray.length);
  topCard.innerHTML = "♥";
  //   console.log("Hello Rigo from the console!");
};
