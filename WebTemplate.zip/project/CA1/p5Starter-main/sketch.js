let x;
let col;
let row;
let chart;
let news;
let cells;

function setup() {
  createCanvas(1000, 1000);
  x = 30;
//measurement of columns and rows
  col = floor(width / x);
  row = floor(height / x);
  //using for loop to create grid
  chart = new Array(col);
  for (let i = 0; i < col; i++) {
    chart[i] = new Array(row);
  }
  
  news = new Array(col);
  for (i = 0; i < col; i++) {
    news[i] = new Array(row);
  }
  cells = new Cell();

}

// function that will draw living/dead cells
function draw() {
cells.lifedeath();

}

//function that will start simulation per mouseclick
function mousePressed() {
  cells.start();
}

//function that will generate the function of watching the neighbouring cells
function generate() {
cells.neighbourwatch();
}

