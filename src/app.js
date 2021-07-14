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
  var suitesArray = ["♦", "♥", "♠", "♣"];
  var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var randomSuite = Math.floor(Math.random() * suitesArray.length);
  var randomNum = Math.floor(Math.random() * numArray.length);
  var finalSuite = suitesArray[randomSuite];
  var finalNum = numArray[randomNum];
  var answer =
    finalSuite == suitesArray[0] || finalSuite == suitesArray[1]
      ? document.getElementById("card").classList.add("red")
      : document.getElementById("card").classList.remove("red");

  topCard.innerHTML = finalSuite;
  bottomCard.innerHTML = finalSuite;
  middleCard.innerHTML = finalNum;
};
