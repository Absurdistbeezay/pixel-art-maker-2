// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Global variable
const canvas = document.getElementById("pixelCanvas");

document.getElementById('sizePicker').addEventListener('submit', makeGrid);

function makeGrid(e) {
  // Your code goes here!
  e.preventDefault();
  clearGrid();

  let height = document.getElementById('inputHeight');
  let width = document.getElementById('inputWidth');

  for (let i = 0; i < height.value; i++) {
    const row = canvas.insertRow(i);
    for (let j = 0; j < width.value; j++) {
    const cell = row.insertCell(j);
    cell.addEventListener('click', colorGrid)
    }
  }
}

function colorGrid(){
  const pickedColor = document.getElementById('colorPicker');
  this.setAttribute('style', `background-color: ${pickedColor.value}`);
}

function clearGrid() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}