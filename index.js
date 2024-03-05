const inquirer = require('inquirer')
const fs = require('fs')
const {Triangle, Square, Circle} = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        message: 'What text would you like to appear in your logo? Please limit response to three characters.',
        validate: (text) => {
            if(text.length <= 3) {
                return true
            } else {
                return 'Cannot be more than three characters'
            }
        },
        name: 'text',
    },
    {
        type: 'list',
        message: 'What shape would you like your logo to be?',
        choices: ['triangle', 'circle', 'square'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What color would you like your logo to be? Please enter a color or a hexadecimal code',
        name: 'fill',
    },
    {
        type: 'input',
        message: 'What color would you like your text to be?',
        name: 'textColor'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Generated logo.svg'))
};

function generateSVG(data) {
    let shapeItem = '';
    if(data.shape === 'triangle') {
        shapeItem = new Triangle(data.text, data.fill, data.textColor)
    } if(data.shape === 'circle'){
        shapeItem = new Circle(data.text, data.fill, data.textColor)
    } if(data.shape === 'square') {
        shapeItem = new Square(data.text, data.fill, data.textColor)
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                ${shapeItem.render()}
                ${shapeItem.renderText()}
            </svg>`
};

function init() {
    inquirer
        .prompt(questions)
        .then((data) => writeToFile('logo.svg', generateSVG(data)))
;}

init();