class Dustbin {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var object = this.body.position
        fill("white");
        //rect(object.x, object.y, this.width, this.height)
    }
}