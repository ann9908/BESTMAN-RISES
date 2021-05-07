class createDrop {
    constructor(x,y){
        var options= {
            resitution : 0.001,
            friction : 0.1
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world,this.rain)
    }

    update(){
        if(this.rain.position > height){
    Matter.body.setPosition(this.rain,{x :random(0,400),y: random(0,400)})
        }
    }

    showDrops(){
        fill("blue")
        ellipseMode (CENTER)
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
    }

    
}