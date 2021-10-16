function generateHtml(data) {
    return `
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

        <div class="container mx-auto mt-4">
            <div class="row">
                <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h2 class="card-title">${data.name}</h2>
                            <p class="card-text mb-2">ID: ${data.id}</p>
                            <p class="card-text">Email: ${data.email}</p>
                            <p class="card-text">Email: ${data.officeNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>


    `;
}

function manager(data) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${data.name}</h2>
                <p class="card-text mb-2">ID: ${data.role}</p>
                <p class="card-text mb-2">ID: ${data.id}</p>
                <p class="card-text">Email: ${data.email}</p>
                <p class="card-text">Email: ${data.officeNumber}</p>
            </div>
        </div>
    `
}

function engineer(data) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${data.name}</h2>
                <p class="card-text mb-2">ID: ${data.role}</p>
                <p class="card-text mb-2">ID: ${data.id}</p>
                <p class="card-text">Email: ${data.email}</p>
                <p class="card-text">Email: ${data.gitHub}</p>
            </div>
        </div>
    `
}

function intern(data) {
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${data.name}</h2>
                <p class="card-text mb-2">ID: ${data.role}</p>
                <p class="card-text mb-2">ID: ${data.id}</p>
                <p class="card-text">Email: ${data.email}</p>
                <p class="card-text">Email: ${data.school}</p>
            </div>
        </div>
    `
}

module.exports = generateHtml;