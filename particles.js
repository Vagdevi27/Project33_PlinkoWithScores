class Particle{
    constructor(x, y) {
        var options = {
            'restitution':0,
            'friction':1.0,
            isStatic : false
        }
        this.body = Bodies.circle(x, y, 5, options);
        //this.width = 25;
        //this.height = 30;
        //this.image = loadImage("mango.png");
      //  this.color = color(random(0,255), random(0,255), random(0,255))
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill (random(0,255), random(0,255), random(0,255))
        ellipseMode(RADIUS);
        ellipse(0,0, 5,5);
        pop();
      }
}