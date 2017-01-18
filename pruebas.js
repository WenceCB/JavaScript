
var Coche =  function(name){
    this.name = name;
    this.saluda = function(){
        console.log ('Hola soy ' + this.name);
    }
};
var tesla = new Coche('tesla');
var Planta = function (name) {

    this.name = name;
    this.crece = tesla.saluda; // reutilizo el método
    this.crece1 = function () {
        tesla.saluda();
    }

}

// Creamos un objeto



/*
// LLamamos al metodo

tesla.saluda();

// Otro llama al metodo
setTimeout(tesla.saluda.bind(tesla), 1000);*/

var planta = new Planta ('flor');
console.log(planta.name);
planta.crece();
planta.crece1();