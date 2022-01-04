let arrow;
function setup() {

	background(255,0,0);


	arrow = new ArrowUpdated(200, 0,20,40,60,0);
}


function draw() {	
	createCanvas(640, 640);
	background(255,0,0);
	arrow.drawArrow();
	arrow.moveArrow();
}