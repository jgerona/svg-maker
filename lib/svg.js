//require shape?

class SVG {
    constructor() {
        this.shape = "";
        this.text = "";
    }

    setShape(shape) {
        this.shape = shape.render();
    }

    setText(chars, color) {
        if(chars.length > 3){
            throw new Error("Must be a maximum of 3 characters");
        } 
        else{
            this.text = `<text x="100" y="50" text-anchor="middle" dominant-baseline="middle" font-size="50" fill="${color}">${chars}</text>`;
        }
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
}
module.exports = SVG;