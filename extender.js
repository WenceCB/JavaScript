/**
 * Created by Wence on 13/1/17.
 */

var one = {
    id: 123,
    count: 41,
    desc: 'esto es la descripción'
};
var two = {
    name: ' El nombre',
    tag: 'js',
    values: [1,2,3]
};
var three = {
    count: 42,
    title: 'título',
    desc: null,
    values: [4,5,6]
};

// Cargamos la libreria

var util = require('util');

// Metemos en variable haciendo referencia a la utilidad las dos variables definidas anteriormente
var extendido = util._extend(one, two);

// En consola mostramos la variable extendido y añadimos la variable three

console.log(util._extend(extendido, three));