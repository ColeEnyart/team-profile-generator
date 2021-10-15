const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const generateHtml = require('./src/generateHtml');

const employee = new Employee();

const questions = [
    {
        type: 'input',
        message: 'Enter the Name:  |',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter the ID:    |',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Enter the Email: |',
        name: 'email',
    }
];

function writeToFile(finalHtml) {
    fs.writeFile('./dist/index.html', finalHtml, err => {
        err ? console.log("error") : console.log("Success!!!")
    })
};

function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            const finalHtml = generateHtml(responses);
            writeToFile(finalHtml);
        })
};

init();
