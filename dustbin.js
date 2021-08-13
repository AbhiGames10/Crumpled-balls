class dustbin
{
    constructor(x, y, w, h){

        let options = {
            isStatic:true,
            restitution: 0.8,
            friction: 0.3,
            density: 1.2
        };

        this.body = Bodies.rectangle(x, y, w, h, options);

        this.w = w;
        this.h = h;
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("purple");
        rect(0,0,this.w,this.h);
        pop();
    }
}