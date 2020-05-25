//Module 9 Template-Page
module.exports = templateData => {
    const { projects, about, ...header } = templateData;
    managerObj = templateData[0];
    engineerObj = templateData[1];
    engineer2Obj = templateData[2];
    internObj = templateData[3];
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team-Builder-Plus</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>

      <header>
        <div class="jumbotron">
          <h1 class="display-4">My Team</h1>
        </div>
      </header>

      <main>

        <div class="container">

          <div class="row">

            <div class="col-3">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${managerObj.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">ID: ${managerObj.id}</h6>
              <p class="card-text">Phone number: ${managerObj.officeNumber}</p>
              <a href="mailto:${managerObj.email}" class="card-link">Email</a>
            </div>
            </div>
            </div>

            <div class="col-3">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${internObj.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">ID: ${internObj.id}</h6>
              <p class="card-text">${internObj.university}</p>
              <a href="mailto:${internObj.email}" class="card-link">Email</a>
            </div>
            </div>
            </div>

            <div class="col-3">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${engineerObj.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">ID: ${engineerObj.id}</h6>
              <p class="card-text">https://www.github.com/${engineerObj.github}</p>
              <a href="mailto:${engineerObj.email}" class="card-link">Email</a>
            </div>
            </div>
            </div>

            <div class="col-3">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${engineer2Obj.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">ID: ${engineer2Obj.id}</h6>
              <p class="card-text">https://www.github.com/${engineer2Obj.github}</p>
              <a href="mailto:${engineer2Obj.email}" class="card-link">Email</a>
            </div>
            </div>
            </div>

          </div>
        </div>
      </main>
    </body>

    </html>
    `;
  };