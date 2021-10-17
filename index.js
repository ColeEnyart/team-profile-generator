// Require inquirer
const inquirer = require('inquirer');

// Require other files
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const generateHtml = require('./src/generateHtml');

// Single source of truth
const teamList = [];

// Asks quesitons for Intern and makes a new Intern
function internInfo() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter the Intern Name:           |',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Enter the Intern ID:             |',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Enter the Intern Email:          |',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Enter the Intern School:         |',
                name: 'school',
            }
        ])
        .then(res => {
            const intern = new Intern(res.name, res.id, res.email, res.school);
            teamList.push(intern);
            choice();
        })
}

// Asks quesitons for Engineer and makes a new Engineer
function engineerInfo() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter the Engineer Name:         |',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Enter the Engineer ID:           |',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Enter the Engineer Email:        |',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Enter the Engineer GitHub:       |',
                name: 'github',
            }
        ])
        .then(res => {
            const engineer = new Engineer(res.name, res.id, res.email, res.github);
            teamList.push(engineer);
            choice();
        })
}

// Gives user choice on who to add to team or finish and create an HTML page
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

// Asks quesitons for Manager and makes a new Manager
function managerInfo() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter the Manager Name:          |',
                name: 'name',
            },
            {
                type: 'input',
                message: 'Enter the Manager ID:            |',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Enter the Manager Email:         |',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Enter the Manager Office Number: |',
                name: 'officeNumber',
            }
        ])
        .then((res) => {
            const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
            teamList.push(manager);
            choice();
        })
};

// Starts applicaiton with asking user to input Manager info
managerInfo();