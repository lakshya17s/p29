class Polygon{
    constructor(x,y,width,height){
        var options = {
            restitution:0.8,
            friction:2.0,
            density:1.0,

        }
        this.polygon = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Img  = loadImage("polygon.png");
        World.add(world, this.polygon);
    }
display(){
    var angle = this.polygon.angle;
    var pos = this.polygon.position;
  
push();
translate(pos.x,pos.y);
rotate(angle);

/*imageMode(CENTER);
image(this.Img,0,0,this.width,this.height)

**/
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();
}
}