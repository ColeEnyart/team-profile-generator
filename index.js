const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const generateHtml = require('./src/generateHtml');

const teamList = [];

function internInfo() {
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
                message: 'Enter the School: |',
                name: 'school',
            }
        ])
        .then(res => {
            const intern = new Intern(res.name, res.id, res.email, res.school);
            teamList.push(intern);
            console.log(teamList);
            choice();
        })
}

function engineerInfo() {
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
                message: 'Enter the GitHub: |',
                name: 'github',
            }
        ])
        .then(res => {
            const engineer = new Engineer(res.name, res.id, res.email, res.github);
            teamList.push(engineer);
            console.log(teamList);
            choice();
        })
}

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
            switch (res.choice) {
                case 'Engineer':
                    engineerInfo(res);
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
            const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
            teamList.push(manager);
            console.log(teamList);
            choice();
        })
};

init();
