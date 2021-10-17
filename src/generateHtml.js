// Require fs
const fs = require('fs');

// The top part of the HTML, goes before the team cards
let topHtml = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css" />
        </head>
        
        <body>
            <nav class="nav justify-content-center">
                <span class="navbar-brand">My Team</span>
            </nav>
        
            <main class="container row mx-auto mt-4">
`

// The bottom part of the HTML, comes after the team cards
const bottomHtml = `
            </main>

            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
    </html>
`

// Creates a HTML card for each team member
function generateHtml(list) {
    list.forEach(employee => {
        let teamRole = employee.getRole();
        let roleInfo = ``;

        switch (employee.getRole()) {
            case 'Manager':
                teamRole = `<h5 class="card-title mb-2"><i class="fa fa-balance-scale"></i> ${teamRole}</h5>`
                roleInfo = `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`
                break;
            case 'Engineer':
                teamRole = `<h5 class="card-title mb-2"><i class="fab fa-dev"></i> ${teamRole}</h5>`
                roleInfo = `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>`
                break;
            case 'Intern':
                teamRole = `<h5 class="card-title mb-2"><i class="fas fa-university"></i> ${teamRole}</h5>`
                roleInfo = `<li class="list-group-item">School: ${employee.school}</li>`
                break;
            default:
                console.log('Error in switch');
        }

        let card = `
                <div class="card" style="width: 18rem;">
                    <div class="card-header">${employee.name}</div>
                        <div class="card-body">
                            ${teamRole}
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${employee.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                                ${roleInfo}
                            </ul>
                        </div>
                </div>
        `
        topHtml = topHtml.concat(card);
    });

    let finalHtml = topHtml.concat(bottomHtml);

    writeToFile(finalHtml);
}

// Creates an index.html file
function writeToFile(finalHtml) {
    fs.writeFile('./dist/index.html', finalHtml, err => {
        err ? console.log("error") : console.log("Generated index.html");
    })
};

module.exports = generateHtml;