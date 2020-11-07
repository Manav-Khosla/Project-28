class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0,
          friction: 1,
          density: 1.2
      }
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      this.image = loadImage("Images/boy.png");
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
  };
