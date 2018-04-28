(function(file) {
    'use strict';
    
    //console.log('777' + file);
    let fs = require('fs');

    let archivo= `.\\env\\${file}`;

    console.log('archivo:[' + archivo + ']');

     fs.readFile(archivo, 'utf-8', (err, data) => {
     if(err) {
          console.log('error: ', err);
        } else {
            let jsonContent = JSON.parse(data);
          console.log(data);
          console.log(jsonContent['var1']);
       }
     });

   
})('dev.json');


