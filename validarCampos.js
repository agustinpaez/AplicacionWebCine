
function validacion() {
    field = "fechaticket";
    valor=document.getElementById(field).value;

    var today = new Date();
    var date2 = new Date(valor);

    if(date2<today){
        document.getElementById(field).focus();
        alert('[ERROR] La fecha del ticket es menor a la fecha actual');
        return false;
    }
}

/*function funcionHola() {
    
        document.getElementById("campoHola").innerHTML = "hola guachin";
    
}
*/

function tarjetaSantander(){
    document.getElementById("bancoSantander").innerHTML = `<strong>INGRESE LOS PRIMEROS 6 DIGITOS DE SU TARJETA SANTANDER: </strong> <input type="text" id= "tarjetaSantander"><br>`;
}

function tarjetaNevada(){
    document.getElementById("tarjetaNevada").innerHTML = `<strong>LOS PRIMEROS 6 DIGITOS DE SU TARJETA NEVADA: </strong> <input type="text" id= "tarjetaNevada"><br>`;
}

function codigoPersonal(){
    document.getElementById("codigoPersonal").innerHTML = `<strong>INGRESE SU CODIGO 2X1 PERSONAL: </strong> <input type="text" id= "codigoPersonal"><br>`;
}



