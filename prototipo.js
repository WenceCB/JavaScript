/**
 * Created by Wence on 13/1/17.
 */

// Hacemos un constructor de objetos

var Persona = function(name){
    this.name = name;
}

// Creamos un objeto

var persona = new Persona('Wence');


// Le asignamos un método a el objeto

persona.saluda = function () {
    console.log( 'Hola soy ' + this.name);
};

persona.saluda();

// Veremos que no tiene el método

var luis = new Persona('Luis');

//luis.saluda();

// Ponerle un método al prototipo

Persona.prototype.come = function () {
    console.log (this.name + " come mucho");
};

// Lo tienen todos

luis.come();
persona.come();