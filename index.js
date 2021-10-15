const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHtml = require('./src/generateHtml');

const managerInfo = [
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
    },
    {
        type: 'input',
        message: 'Enter the Office Number: |',
        name: 'officeNumber',
    }
];

function choice() {
    
}

function writeToFile(finalHtml) {
    fs.writeFile('./dist/index.html', finalHtml, err => {
        err ? console.log("error") : console.log("Success!!!")
    })
};

function init(member) {
    inquirer
        .prompt(managerInfo)
        .then((responses) => {
            switch(member) {
                case Engineer:
                    inquirer
                        .prompt()
                case Intern:
                    inquirer
                        .prompt(questions)
                case Finish:
            }
            const finalHtml = generateHtml(responses);
            writeToFile(finalHtml);
        })
};

init();
