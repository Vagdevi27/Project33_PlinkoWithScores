class Plinko{
    constructor(x, y) {
        var options = {
            'restitution':0,
            'friction':1.0,
            isStatic : true
        }
        this.body = Bodies.circle(x, y, 5, options);
        //this.width = 25;
        //this.height = 30;
        //this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
       // translate();
        //rotate(angle);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 5,5);
        pop();
      }
}