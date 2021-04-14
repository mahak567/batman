class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png",);
        this.batman = loadAnimation("Walking Frame/batman.png");
        this.brad=createSprite(x,y);
        this.brad.addAnimation("walking",this.image);
        this.brad.addAnimation("batman",this.batman);
        this.brad.scale=0.5;
        this.umbrella = Bodies.circle(x,y-50,100,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        fill("white")
        //circle(200,450,200);
        //imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        //image(this.image,pos.x,pos.y+70,300,300);
        drawSprites();
    }
}
