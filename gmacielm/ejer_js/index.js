(function() {
    'use strict';

    const article = document.querySelector('.name-list');
    const API_URL = 'canales.json';

fetch(API_URL)
.then( (response) => response.json()) 
.then( (response) => printResponse(response.canales))
.catch(err => console.log('Falló la petición:[' + err + ']'));

function printResponse(canales) {
    
    let tabla = "";
    tabla += `<table border="1">`;
    tabla += `<tr> <td>LLAVE</td><td>CANAL</td>`;

    for (let canal of canales) {
        
        let llave;
        Object.keys(canal).map(function(key, index) {
        llave= key;
        });
        
     tabla += `<tr width="50">
                <td width="50"> ${llave}</td>
                <td width="50">
                   ${canal.nombre}
                </td>
               </tr>`;
    }

    tabla += `</table>`;
    article.innerHTML = tabla;
}

})();