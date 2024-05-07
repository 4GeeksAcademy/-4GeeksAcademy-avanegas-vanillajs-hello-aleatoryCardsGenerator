/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const carddee = () => {};
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

  function cardsSymbols() {
    let symbols = ["♦", "♥", "♠", "♣"];
    let symbolsRandom = Math.floor(Math.random() * 4);
    let selectSymbols = symbols[symbolsRandom];

    console.log(selectSymbols);

    let paragraphSymbolStart = document.createElement("p");
    paragraphSymbolStart.textContent = selectSymbols;

    let containerSymbolStart = document.querySelector(".card-symbol-start");
    containerSymbolStart.appendChild(paragraphSymbolStart);

    let paragraphSymbolEnd = document.createElement("p");
    paragraphSymbolEnd.textContent = selectSymbols;

    let containerSymbolEnd = document.querySelector(".card-symbol-end");
    containerSymbolEnd.appendChild(paragraphSymbolEnd);
  }
  cardsSymbols();
};
