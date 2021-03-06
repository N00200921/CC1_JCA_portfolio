class Bullet{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.velocity = bulletVelocity;
    }


    render(){
        push()
        translate(this.pos.x, this.pos.y);
        fill(0,255,0);
        ellipse(0, 0, bulletWidth, bulletHeight)
        pop()
    }

move(){
    this.pos.x += this.velocity;
    }

    hits(alien){
        let distance = (p5.Vector.sub(this.pos, alien.pos)).mag();
        if (distance < 30){
            return true;
        } else{
            return false;
        }
    }




}