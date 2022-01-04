let emitters =[];

function mousePressed(){
    emitters.push(new Emitter(mouseX,mouseY))
}

function setup() {
    createCanvas(500, 500);
    background(255);
    rectMode(CENTER);
  

}

function draw() {
    background(0);
    
    emitters.forEach(emitter=>{
        emitter.createParticles();
        emitter.update();
        emitter.render();
    });

}