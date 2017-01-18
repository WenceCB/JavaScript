/**
 * Created by Wence on 20/12/16.
 */

console.log("Empezamos");

var escribeTras2Segundos = function ( texto, callBack) {

    setTimeout(function(){
        console.log(texto);
        callBack();
    },1000)
}


function serie (n,func,callbackFin) {
    if (n > 0) {
        n--;
        func('texto', function () {
            serie(n, func, callbackFin);
        });
    }
    else {
        callbackFin();
    }
}

serie(5,escribeTras2Segundos,function(){
    console.log("He terminado");
})
  /*  escribeTras2Segundos("texto1", function () {

        console.log("He escrito el 1");
    });*/




