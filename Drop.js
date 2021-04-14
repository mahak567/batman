class Drop {

    constructor(x, y) {
        var options={
         restitution: 0.1,
         friction: 0.1
      };
      this.rain = Bodies.circle(x, y, 5, options);
      
      World.add(world,this.rain);
    }
    display(){
      var pos = this.rain.position;
      fill("blue");
      ellipse(pos.x, pos.y, 10, 10);
    }
     update(){
       if(this.rain.position.y>height){
          console.log(this.rain.position.y);
          Matter.Body.setPosition(this.rain,{x: random(0,400),
          y: random(0,400)
          });
        }
     }
  }