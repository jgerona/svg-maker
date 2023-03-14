const {Square,Circle,Triangle} = require('./shape');
const SVG = require('./svg')

describe('Shape', () => {
    describe('Triangle', () => {
        it('should create a triangle object with the color blue',() => {
            const triangle = new Triangle();
            triangle.setColor("blue")
            //console.log(triangle.render());
            expect(triangle.render()).toEqual(`<polygon points="100,200 200,0 0,0" fill="blue" />`)
        })
    })
    describe('Circle', () => {
        it('should create a circle object with the color red', () => {
            const circle = new Circle();
            circle.setColor("red");
            expect(circle.render()).toEqual(`<circle cx="100" cy="100" r="100" fill="red" />`);
        });
    })
    describe('Square', () => {
        it('should create a square object with the color green', () => {
            const square = new Square();
            square.setColor("green");
            expect(square.render()).toEqual(`<polygon points="0,0 0,200 200,200 200,0" fill="green" />`)
        })
    })
})
describe('svg', () => {
    it('should create an SVG object with green text abc and a red square behind the text', () => {
        const newSVG = new SVG();
        const square = new Square();
        square.setColor("red");
        newSVG.setShape(square);
        newSVG.setText("abc", "green");
        expect(newSVG.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 0,200 200,200 200,0" fill="red" /><text x="100" y="50" text-anchor="middle" dominant-baseline="middle" font-size="50" fill="green">abc</text></svg>`)
    })
})