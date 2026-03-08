const container = document.querySelector(".container");
const numOfRows = 16;
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
