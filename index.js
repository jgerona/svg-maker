const fs = require('fs');
const SVG = require('./lib/svg');
const inquirer = require('inquirer');

const {Square, Circle, Triangle} = require('./lib/shape');
// const Circle = require('./lib/shape');
// const Square = require('./lib/shape');


inquirer
    .prompt([
        {
            type: 'input',
            message: "What do you wish to title the SVG?",
            name: "name",
        },
        {
            type: 'input',
            message: "Enter up to 3 Characters for your SVG",
            name: "textChars",
        },
        {
            type: 'input',
            message: "Enter the color for the text of your SVG",
            name: "textColor",
        },
        {
            type: 'list',
            message: "Pick a shape for your SVG",
            name: "shapeType",
            choices: ["Triangle", "Circle", "Square"]
        },
        {
            type: 'input',
            message: "Enter the color for the shape of your SVG",
            name: "shapeColor",
        },
    ]).then((data) => {
        fs.writeFile(`${data.name}.svg`,makeSVG(data), (err) =>
            err ? console.log(err) : console.log(`Successfully made ${data.name}.svg`)
        );
    });

    //constructs SVG given response from inquirer
    function makeSVG(data){
        //console.log(data.shapeType);
        if(data.shapeType == "Triangle"){
            //console.log("tri")
            const newSVG = new SVG();
            const triangle = new Triangle();
            triangle.setColor(data.shapeColor);
            newSVG.setShape(triangle);
            newSVG.setText(data.textChars, data.textColor);
            return newSVG.render();
        }
        else if(data.shapeType == "Circle"){
            //console.log("circle")
            const newSVG = new SVG();
            const circle = new Circle();
            circle.setColor(data.shapeColor);
            newSVG.setShape(circle);
            newSVG.setText(data.textChars, data.textColor);
            return newSVG.render();
        }
        else if(data.shapeType == "Square"){
            //console.log("squ");
            const newSVG = new SVG();
            const square = new Square();
            square.setColor(data.shapeColor);
            newSVG.setShape(square);
            newSVG.setText(data.textChars, data.textColor);
            return newSVG.render();
        }
    }