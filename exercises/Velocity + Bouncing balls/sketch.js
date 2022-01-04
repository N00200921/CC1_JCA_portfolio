let myball1
let myball2



function setup() {

    

	myball1 = new Ball(200,240,7,15,20,255);
	myball2 = new Ball(100,240,15,15,20,45);


}	
function draw() {	
	createCanvas(640, 640);
	background(255,0,0);

	var c = Math.sqrt( myball2.x*myball1.x + myball2.y*myball1.y );
	console.log(c);
	myball1.drawBall();
	myball2.drawBall();
	myball1.moveBall();
	myball2.moveBall();

}

