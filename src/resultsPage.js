function resultsPage(teamName, addCard) {
  return `
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta http-equiv="X-UA-Compatible" content="ie=edge" />
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"crossorigin="anonymous"/>
      
         
         <title>${teamName} Team Headquarters</title>
      
       </head>
     
       <body>
         <header>
           <nav class="navbar navbar-expand-lg navbar-light bg-custom">
             <div class="container-fluid">
               <h1 class="mx-auto display-4">${teamName} Team Headquarters</h1>
             </div>
           </nav>
         </header>
         <div class="container-fluid mx-auto">
         
             <div class="row employeeRow"> 
             ${addCard} 
             </div>
             </div>
             <script src="app.js"></script>
             </body>
         </html>
     `;
}

module.exports = resultsPage;
