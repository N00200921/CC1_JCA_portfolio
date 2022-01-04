let myarrow
let myarrow2


function setup() {
	createCanvas(640, 640);
	background(255,0,0);
   
	fill(0);
myarrow = new Arrow(200, 400,PI);
myarrow2 = new Arrow(320, 320,PI);


}	
function draw() {	
	
	myarrow.drawArrow();
	myarrow2.drawArrow();
}

