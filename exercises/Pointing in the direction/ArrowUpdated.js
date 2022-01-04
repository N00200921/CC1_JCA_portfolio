//Arrow class
class ArrowUpdated {
	constructor(x, y, vx, vy, rotation, c) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.rotation = rotation;
		this.c = c;
	}
	//function to draw the arrow
	drawArrow() {
		let angle = Math.atan2(this.y-this.vy, this.x-this.vx);
		push();
		//translate from the top left corner to x and y of object
		translate(this.x, this.y);
		//rotate by rotation value of object
		rotate(angle);
		fill(this.c);
		beginShape();
		vertex(-50, -25);
		vertex(0, -25);
		vertex(0, -50);
		vertex(50, 0);
		vertex(0, 50);
		vertex(0, 25);
		vertex(-50, 25);
		vertex(-50, -25);
		endShape();
		pop();
		
	}
	moveArrow()
	{
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}