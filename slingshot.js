class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.004,
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
    
        World.add(world, this.sling);
        }
        fly(){
            this.sling.bodyA = null;
        }
    display(){
       if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var posB = this.pointB;
        strokeWeight(10);
        stroke(48,22,8);
        line(pointA.x,pointA.y,posB.x,posB.y);
    }
}
}
