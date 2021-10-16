const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const generateHtml = require('./src/generateHtml');

const teamList = [];

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
            const intern = new Intern(res);
            teamList.push(intern);
            choice();
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
            const engineer = new Engineer(res);
            teamList.push(engineer);
            choice();
        })
}

/* function managerInfo() {
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
            const manager = new Manager(res);
            teamList.push(manager);
            choice();
        })
} */

function choice() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Do you want to add another team member? |',
                name: 'choice',
                choices: ['Engineer', 'Intern', 'finish building my team']
            }
        ])
        .then(res => {
            /* const string = JSON.stringfy(res);
            console.log(string); */
            switch (res) {
                case { choice: 'Engineer' }:
                    engineerInfo();
                    break;
                case 'Intern':
                    internInfo(res);
                    break;
                case 'finish building my team':
                    generateHtml(teamList);
                    break;
                default:
                    console.log('Error in switch');
            }
        })
}

function writeToFile(finalHtml) {
    fs.writeFile('./dist/index.html', finalHtml, err => {
        err ? console.log("error") : console.log("Success!!!")
    })
};

function init() {
    inquirer
        .prompt([
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
        .then((res) => {
            const manager = new Manager(res);
            teamList.push(manager);
            console.log(teamList);
            choice();
        })
};

init();
