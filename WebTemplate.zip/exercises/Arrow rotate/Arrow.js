class Arrow {
	constructor(x, y, rotation) {
	
		this.x = x;
		this.y = y;
		
		this.rotation = rotation;
   
	}
	
	drawArrow() {
			
		let angle = Math.atan2(mouseY-this.y, mouseX-this.x);
		push();
	
		
		createCanvas(640, 640);
		background(255,0,0);
	
		translate(this.y, this.x);
		rotate(angle)


		line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25);
		pop();
	}
}



