/**
 * Created by Wence on 17/1/17.
 */

// Cargamos la libreria

var events = require('events');

var myEventEmitter = new events.EventEmitter();

myEventEmitter.on('Suena teléfono', function(quien){
    if (quien === 'madre'){
        return;
    }
    console.log('ring ring');

});

myEventEmitter.on('Suena teléfono', function(quien){

    console.log('brr brr');

});

myEventEmitter.emit('Suena teléfono','brr');