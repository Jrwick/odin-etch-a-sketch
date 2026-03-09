const container = document.querySelector(".container");

function removeNodes() {
  const nodes = document.querySelectorAll(".container div");
  nodes.forEach((element) => {
    element.remove();
  });
}

function turnOnBasicEtch() {
  const nodes = document.querySelectorAll(".node");
  nodes.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.add("selected");
    });
  });
}

function buildGrid(numOfRows) {
  removeNodes();
  for (let i = 0; i < numOfRows; i++) {
    const col = document.createElement("div");
    col.classList.add("column");
    for (let j = 0; j < numOfRows; j++) {
      const row = document.createElement("div");
      row.classList.add("node");
      col.appendChild(row);
    }
    container.appendChild(col);
  }
  turnOnRandomEtch();
  //turnOnEtch();
}

const gridSizeBtn = document.querySelector("#grid-size");
gridSizeBtn.addEventListener("click", () => {
  let inRange = false;
  while (!inRange) {
    let numOfRows = prompt("What size grid do you want? (1 - 100)");
    if (numOfRows > 0 && numOfRows <= 100) {
      buildGrid(numOfRows);
      inRange = true;
    } else if (numOfRows == null) {
      return;
    } else {
      alert("Invalid input, please enter a number between 1 and 100");
    }
  }
});

const borderBtn = document.querySelector("#border-toggle");
borderBtn.addEventListener("click", () => {
  const nodes = document.querySelectorAll(".node");
  nodes.forEach((node) => {
    node.classList.toggle("node-border");
  });
});

//Makes nodes random colors when turned on
function turnOnRandomEtch() {
  const nodes = document.querySelectorAll(".node");
  nodes.forEach((element) => {
    element.addEventListener("mouseover", () => {
      const redValue = Math.floor(Math.random() * 256);
      const greenValue = Math.floor(Math.random() * 256);
      const blueValue = Math.floor(Math.random() * 256);
      element.style.background = `rgb(${redValue} ${greenValue} ${blueValue})`;
    });
  });
}

function generateRGB() {
  const redValue = Math.floor(Math.random() * 256);
  const greenValue = Math.floor(Math.random() * 256);
  const blueValue = Math.floor(Math.random() * 256);
}

//Build an initial 8 x 8 grid
buildGrid(8);
