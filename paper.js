class paper
{
    constructor(x, y, r){

        let options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1.2
        };

        this.body = Bodies.circle(x, y, r, options);

        this.r = r;

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle)
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}