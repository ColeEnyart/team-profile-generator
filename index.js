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
            const manager = new Manager(res);
            teamList.push(manager);
            choice();
        })
}

function choice() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Enter the Office Number: |',
                name: 'choice',
                choices: ['Engineer', 'Intern', 'finish building my team']
            }
        ])
        .then(res => {
            (res.choice === 'finish building my team') ? generateHtml(teamList) : init(res.switch);
        })
}

function writeToFile(finalHtml) {
    fs.writeFile('./dist/index.html', finalHtml, err => {
        err ? console.log("error") : console.log("Success!!!")
    })
};

function init(position) {
    inquirer
        .prompt(managerInfo())
        .then((res) => {
            switch (position) {
                case 'Engineer':
                    engineerInfo(res);
                    break;
                case 'Intern':
                    internInfo(res);
                    break;
                case 'Manager':
                    managerInfo(res);
                    break;
                default:
                    console.log('Error in switch');
            }
            const finalHtml = generateHtml(res);
            writeToFile(finalHtml);
        })
};

init('Manager');
