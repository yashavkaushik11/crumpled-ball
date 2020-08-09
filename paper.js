class Paper {
    constructor(x,y,width,height) {
        var options = {
            isStatic = false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("green");
        fill("white");
        rect(0, 0, this.width, this.height);
        pop();
      }
} 