/**
 * Created by Wence on 12/1/17.
 */
function creaUsuario(name){
    var surName = 'Anderson';
    return  {
        login : function () {

            console.log(name + ' ha hecho login');
        },
        setName: function (newName){
            name = newName;
        },
        logout: function () {
            console.log(name + ' ha hecho logout');
        },
        getSurname : function(){
            return surName;
        }
    };
}

// Creamos el closure

var user = creaUsuario('Wence');

user.login();
user.setName('Jesus');
//user.logout();
setTimeout(user.logout, 1000);

console.log(user.getSurname());