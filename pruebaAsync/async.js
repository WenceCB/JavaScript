/**
 * Created by Wence on 17/1/17.
 */

var async= require('async');

// Definir un array

var arr = ['uno','dos','tres'];

// Definir un iterador

var iterador = function(elemento,callback){
    if(elemento === 'dos') {
        return callback(null);
    }
    elemento = elemento + ' -procesado';
    callback(null, elemento);
    return;
};

// Procesar el array

async.concat(arr,iterador,function(err, resultados){

    // Mostrar los resultados

    console.log(resultados);

});

