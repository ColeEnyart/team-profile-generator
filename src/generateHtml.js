const fs = require('fs');

let topHtml = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css" />
        </head>
        
        <body>
            <nav class="nav justify-content-center">
                <span class="navbar-brand">My Team</span>
            </nav>
        
            <main class="container row mx-auto mt-4">
`

const bottomHtml = `
            </main>
            
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
    </html>
`

function writeToFile(finalHtml) {
    fs.writeFile('./dist/index.html', finalHtml, err => {
        err ? console.log("error") : console.log("Success!!!")
    })
};

function generateHtml(list) {
    list.forEach(employee => {
        let rolePosition = employee.getRole();
        let roleSpecific = ``;

        switch (employee.getRole()) {
            case 'Manager':
                roleSpecific = `<p class="card-text">Office Number: ${employee.officeNumber}</p>`
                break;
            case 'Engineer':
                roleSpecific = `<p class="card-text"><a href="${employee.github}" target="_blank">GitHub: ${employee.github}</a></p>`
                break;
            case 'Intern':
                roleSpecific = `<p class="card-text">School: ${employee.school}</p>`
                break;
            default:
                console.log('Error in switch');
        }

        let card = `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h2 class="card-title">${employee.name}</h2>
                    <p class="card-text mb-2">${rolePosition}</p>
                    <p class="card-text mb-2">ID: ${employee.id}</p>
                    <p class="card-text"><a href="mailto:${employee.email}">Email: ${employee.email}</a></p>
                    ${roleSpecific}
                </div>
            </div>
        `
        topHtml = topHtml.concat(card);
    });

    let finalHtml = topHtml.concat(bottomHtml);

    writeToFile(finalHtml);
}

module.exports = generateHtml;