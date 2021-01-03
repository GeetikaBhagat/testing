class DustbinImage {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
    }
    display() {
        var object = this.body.position
        fill("white");
        //rect(object.x, object.y, this.width, this.height)
        image(this.image,object.x,620,150,150);
    }
}