const wrapper = document.querySelector(".wrapper");

function addSquares(toRow, size) {
  for (let i = 0; i < size; i++) {
    console.log(i + "adding square");
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      square.classList.add("blue");
    });

    toRow.appendChild(square);
  }
}

function createTable(size) {
  for (let j = 0; j < size; j++) {
    const row = document.createElement("div");
    row.classList.add("row");
    wrapper.appendChild(row);

    addSquares(row, size);
  }
}

function getValidNumberInput() {
  let userInput;
  let isValid = false;

  while (!isValid) {
    userInput = prompt("Grid size: (number)");
    if (!isNaN(userInput) && userInput <= 100) {
      isValid = true;
    } else {
      alert("Error, somehow you didn't input a number.");
    }
  }

  return userInput;
}

function resizeGrid() {
  while (wrapper.hasChildNodes()) {
    wrapper.removeChild(wrapper.lastChild);
  }
  createTable(getValidNumberInput());
}

createTable(16);
var squaresList = document.querySelectorAll(".square");
squaresList.forEach((squareDiv) => {});
