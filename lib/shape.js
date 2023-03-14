class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color){
        this.color = `fill="${color}"`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100,200 200,0 0,0" ${this.color} />`
        //learn to make a shape with svg
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="100" ${this.color} />`
    }
}

class Square extends Shape {
    render() {
        return `<polygon points="0,0 0,200 200,200 200,0" ${this.color} />`
    }
}

// module.exports = Triangle;
// module.exports = Circle;
module.exports = {Square, Circle, Triangle};