const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const generateHtml = require('./src/generateHtml');

function internInfo() {
    inquirer.prompt([
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
            message: 'Enter the School: |',
            name: 'school',
        }
    ])
    .then(res => {
        const intern = new Intern (res);
        generateHtml(intern);
    })   
}

function engineerInfo() {
    inquirer.prompt([
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
            message: 'Enter the GitHub: |',
            name: 'gitHub',
        }
    ])
    .then(res => {
        const engineer = new Engineer (res);
        generateHtml(engineer);
    })   
}

function managerInfo() {
    inquirer.prompt([
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
    ])
    .then(res => {
        const manager = new Manager (res);
        generateHtml(manager);
    })   
}

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
