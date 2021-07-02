class SlingShot{
    constructor(pointA,pointB){
       
        var options ={
            pointA:pointA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        } 
        this.pointB= pointB
        this.SlingShot=Constraint.create(options)
        World.add(world,this.SlingShot)
    }
    fly(){
        this.SlingShot.bodyA=null
    }
    display(){
       
        var pointA=this.SlingShot.pointA.position
        var pointB=this.pointB
        strokeWeight(6);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
       
    }
   
   
}