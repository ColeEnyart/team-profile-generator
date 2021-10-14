function generateHtml(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <div class="container mx-auto mt-4">
            <div class="row">
                <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text mb-2">Card subtitle</p>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a>
                            <a href="#" class="btn "><i class="fab fa-github"></i> Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </body>
    </html>


    `;
}

module.exports = generateHtml;