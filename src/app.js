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

    const paragraphSymbolStart = document.createElement("p");
    paragraphSymbolStart.textContent = selectSymbols;

    const paragraphSymbolEnd = document.createElement("p");
    paragraphSymbolEnd.textContent = selectSymbols;

    if (selectSymbols === "♦" || selectSymbols === "♥") {
      paragraphSymbolStart.style.color = "red";
      paragraphSymbolEnd.style.color = "red";
    } else {
      paragraphSymbolStart.style.color = "black";
      paragraphSymbolEnd.style.color = "black";
    }
    paragraphSymbolEnd.style.transform = "rotate(180deg)";

    const containerSymbolStart = document.querySelector(".card-symbol-start");
    containerSymbolStart.appendChild(paragraphSymbolStart);

    const containerSymbolEnd = document.querySelector(".card-symbol-end");
    containerSymbolEnd.appendChild(paragraphSymbolEnd);
  };
  cardsSymbols();

  // New card
  const buttonMakeNewCard = document.querySelector(".buttonNewCard");

  buttonMakeNewCard.addEventListener("click", event => {
    window.location.reload();
  });

  // Timer
  const timerReloadButton = document.querySelector(".buttonTimer");

  timerReloadButton.addEventListener("click", event => {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  });

  // Resize
  const buttonResize = document.querySelector(".buttonClickResize");

  buttonResize.addEventListener("click", event => {
    const stringHeight = document.querySelector(".heightSize").value;
    const stringWidth = document.querySelector(".widthSize").value;
    const resizeCard = document.querySelector(".card");
    console.log("variables");
    if (resizeCard && resizeCard.style) {
      resizeCard.style.height = stringHeight + "px";
      resizeCard.style.width = stringWidth + "px";
      console.log("Works");
    }
  });
};
