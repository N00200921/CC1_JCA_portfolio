class Cell {
  // object that shows life and death blocks on chart
    lifedeath(){

    background(255);
    generate();
    for ( let i = 0; i < col;i++) {
      for ( let d = 0; d < row;d++) {
        if ((chart[i][d] == 1)) fill(0);
        else fill(100);
        stroke(0);
        rect(i * x, d * x, x-1, x-1);
      }
    }
}

// object to start squares at random each click
start(){
    for (let i = 0; i < col; i++) {
        for (let d = 0; d < row; d++) {
         
          if (i == 0 || d == 0 || i == col-1 || d == row-1) chart[i][d] = 0;
         
          else chart[i][d] = floor(random(2));
          news[i][d] = 0;
        }
      }
}

//object to calculate if the blocks are next to each other
neighbourwatch(){

    
  
  for (let x = 1; x < col - 1; x++) {
    for (let y = 1; y < row - 1; y++) {
      
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let d = -1; d <= 1; d++) {
          neighbors += chart[x+i][y+d];
        }
      }

    
      neighbors -= chart[x][y];
      //if a cell has less than two neighbouring cells it dies
      if ((chart[x][y] == 1) && (neighbors <  2)) news[x][y] = 0;          
      else if ((chart[x][y] == 1) && (neighbors >  3)) news[x][y] = 0; 
      //if a dead cell has three alive cells next to it , it will become alive         
      else if ((chart[x][y] == 0) && (neighbors == 3)) news[x][y] = 1;          
      else news[x][y] = chart[x][y]; 
    }
  }
// a variable that will save over the existing simulation so it can be reset 
  let rollover = chart;
  chart = news;
  news = rollover;
}


}