/**
 * Created by Wence on 16/1/17.
 */

var Persona = function (nombre, apellido) {

    this.nombre=nombre;
    this.apellido = apellido;

};

var trinity = new Persona("Trinity");


var matrixMixin ={

    vuela : function () {
        console.log(this.nombre + ' vuela');
    },
    esquivaBalas : function () {
        console.log(this.nombre + ' esquiva balas');
    }
};

var util = require ('util');

Persona.prototype = util._extend(Persona.prototype, matrixMixin);

var neo = new Persona('Thomas','Anderson');

neo.vuela();
neo.esquivaBalas();

trinity.vuela();
trinity.esquivaBalas();