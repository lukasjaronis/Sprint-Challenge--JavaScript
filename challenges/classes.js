// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
    constructor(attr) {
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    } // methods
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMaker {
    constructor(cubeAttr) {
        super(cubeAttr);
    }
}

let cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});


let cube = new CubeMaker({
    length: 50,
    width: 70,
    height: 7382,
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(`${cuboid.volume()} - class`); // 100
console.log(`${cuboid.surfaceArea()} - class`); // 130
console.log(`${cube.volume()} - extended class`); // 25,837,000
console.log(`${cube.surfaceArea()} - extended class`); // 1,778,680

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.-