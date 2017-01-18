/**
 * Created by Wence on 10/1/17.
 */


var fs = require('fs');

var path = require('path');

// Abrir un fichero

var fichero = path.join('./' + 'pack.json');
console.log('Abrir '+ fichero);

fs.readFile(fichero, {encoding: 'utf8'},function(err,str){
    if(err){
        console.log(err);
        return;
    }

    //console.log(data);
    // Con la propiedad JSON.parse conseguimos crear un objeto
    var objeto = JSON.parse(str);

    console.log(objeto);

});

// Convertir su contenido JSON en en objeto

// Usamos el objeto
