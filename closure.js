
// Hacer una función que devuelve otra
// La segunda tendrá acceso al scope de su madre

function creaClosure(name){
    return function(){
        console.log(name);
    }
}

// Creamos el Closure

var closure = creaClosure('tesla');
var closure2 = creaClosure('tesla2');

// Usamos el Closure

closure();
closure2();