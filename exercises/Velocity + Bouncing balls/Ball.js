class Ball {
	constructor(x, y, vx, vy, radius, c) {
		
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.c = c;
		

   }
 
   drawBall() {
	  
	
		fill(this.c);
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
		dist(this.x,this.x,this.y ,this.y);
	} 
	
	moveBall() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	    if(this.x + this.vx-this.radius > 630 || this.x + this.vx < 0) {
			this.vx = -this.vx;
		   
		   
		}
		
		if(this.y + this.vy > 640-this.radius || this.y + this.vy < 0) {
			this.vy = -this.vy;
		   
		}
	
	}




}
