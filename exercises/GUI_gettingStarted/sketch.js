

let params = {

	angle: 360,
	angleMin: 2,
    angleMax: 100,
    angleStep: 4,

	posX: 250,
	posXMin: 0,
    posXMax: 500,
    posXStep: 0.2,

    posY: 250,
	posYMin: 0,
    posYMax: 500,
    
    shapeW: 150,
	shapeWMin: 10,
    shapeWMax: 190,

    shapeH: 150,
	shapeHMin: 10,
    shapeHMax: 150,

    bgColor : [180, 255, 255],
    fColor : [2, 1,69],
    filltoggle : true
}

let mypos;

let visible = true;

var gui;




// So now after all of our data has been created we will use p5.js
// to draw circles. We iterate through the array and draw a circle with
// the data in each object

function setup() {
    angleMode(DEGREES);
    createCanvas(500, 500);
    background(params.bgColor);
    mypos =createVector(params.posX, params.posY);
    console.log(params.posX, params.posY);
    // create the GUI
	gui = createGui('Change Values');
	gui.addObject(params);
    gui.addGlobals('bgColor');
    gui.addGlobals('fColor');
    gui.addGlobals('filltoggle');
    //noLoop();
}

function draw() {
    clear();
    mypos = createVector(params.posX,params.posY);
    background(params.bgColor);
    if(params.filltoggle == true){
        fill(params.fColor);
    }  else{
        noFill();
    }
    rectMode(CENTER);
    noStroke();
    push();
    translate(mypos.x, mypos.y)
    rotate(params.angle)
    rect(0,0,params.shapeH,params.shapeW,25,250,25,250);
pop();
    
}

// check for keyboard events
function keyPressed() {
    switch(key) {
      // type [F1] to hide / show the GUI
      case 'p':
        visible = !visible;
        if(visible) gui.show(); else gui.hide();
        break;
    }
  }