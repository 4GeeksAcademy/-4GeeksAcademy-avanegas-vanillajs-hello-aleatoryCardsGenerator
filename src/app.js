/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const cardValue = () => {
    const cards = ["As", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "k"];
    const randomCards = Math.floor(Math.random() * 14);
    const selectCard = cards[randomCards];

    // console.log(selectCard);

    const paragraph = document.createElement("p");
    paragraph.textContent = selectCard;

    const container = document.querySelector(".card-number-center");
    container.appendChild(paragraph);
  };

  cardValue();

  const cardsSymbols = () => {
    const symbols = ["♦", "♥", "♠", "♣"];
    const symbolsRandom = Math.floor(Math.random() * 4);
    const selectSymbols = symbols[symbolsRandom];

    // console.log(selectSymbols);

    const paragraphSymbolStart = document.createElement("p");
    paragraphSymbolStart.textContent = selectSymbols;

    const containerSymbolStart = document.querySelector(".card-symbol-start");
    containerSymbolStart.appendChild(paragraphSymbolStart);

    const paragraphSymbolEnd = document.createElement("p");
    paragraphSymbolEnd.textContent = selectSymbols;

    const containerSymbolEnd = document.querySelector(".card-symbol-end");
    containerSymbolEnd.appendChild(paragraphSymbolEnd);

    if (selectSymbols === "♦" || selectSymbols === "♥") {
      containerSymbolStart.appendChild(paragraphSymbolStart).style.color =
        "red";
      containerSymbolEnd.appendChild(paragraphSymbolEnd).style.color = "red";
    } else {
      containerSymbolStart.appendChild(paragraphSymbolStart).style.color =
        "black";
      containerSymbolEnd.appendChild(paragraphSymbolEnd).style.color = "black";
    }
  };
  cardsSymbols();

// New card

  window.clickNewCard = function clickNewCard() {
    window.location.reload();
  };

// Time up
};
