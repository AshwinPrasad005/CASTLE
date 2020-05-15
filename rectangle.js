class Rectangle{

    constructor(x,y,witdh,height){
        var option = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y.witdh,height,option);
        this.height = height;
        this.witdh = witdh;
        World.add(world,this.body);

    }

     display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        rect(this.body,0,0,this.witdh,this.height);
        pop()

    }
    
    

}