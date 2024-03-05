class Shape {
    constructor(text, fill, textColor) {
        this.text = text;
        this.fill = fill;
        this.textColor = textColor;
    }
    setFill(color) {
        this.fill = color
    }
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Triangle extends Shape {
    constructor(text, fill, textColor) {
        super(text, fill, textColor)
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}"/>`
    }
        
}

class Square extends Shape {
    constructor(text, fill, textColor) {
        super(text, fill, textColor)
    }
    render(){
        return `<rect x="10" y="10" width="200" height="200" fill="${this.fill}"/>`
    }
}

class Circle extends Shape {
    constructor(text, fill, textColor) {
        super(text, fill, textColor)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fill}"/>`
    }
}

module.exports = {Triangle, Square, Circle}