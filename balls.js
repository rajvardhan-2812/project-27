class balls
{
constructor(x,y,rad)
{
    var options = {
        restitution:0.4,
        density:1,
        //isStatic:true
    }
 this.body = Bodies.circle(x,y,rad,options)

 this.radius = rad 

 World.add(world,this.body)

}
display()
{
    
    var pos = this.body.position
    fill("red")
    ellipseMode(RADIANS)
    circle(pos.x,pos.y,this.radius*2)
}
}