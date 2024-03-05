const {Triangle, Square, Circle} = require('./shapes.js');

describe('Triangle', () => {
    test('should render a blue trianlge', () => {
    const shape = new Triangle();
    shape.setFill("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    });
})

describe('Square', () => {
    test('should render a blue square', () => {
    const shape = new Square();
    shape.setFill("blue");
    expect(shape.render()).toEqual('<rect x="10" y="10" width="200" height="200" fill="blue"/>');
    });
})

describe('Circle', () => {
    test('should render a blue circle', () => {
    const shape = new Circle();
    shape.setFill("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
    });
})