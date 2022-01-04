class Alien{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.velocity = 1;
    }


    render(){
  
        fill(255,0,0)
       ellipse(this.pos.x,this.pos.y, alienWidth, alienHeight)
     
    }

move(){
    this.pos.x += this.velocity;
    }

shift(){
    this.pos.y += 50;
this.velocity *=-1;
}

}