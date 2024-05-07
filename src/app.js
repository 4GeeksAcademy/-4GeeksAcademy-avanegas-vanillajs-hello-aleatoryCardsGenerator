/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function cardValue() {
    let cards = ["As", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "k"];
    let randomCards = Math.floor(Math.random() * 14);
    let selectCard = cards[randomCards];

    console.log(selectCard);

    let paragraph = document.createElement("p");
    paragraph.textContent = selectCard;

    let container = document.querySelector(".card-number-center");
    container.appendChild(paragraph);
  }
  cardValue();
};
