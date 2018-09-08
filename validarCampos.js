
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
    
    
    if(document.getElementById("selectSantander").value > 0)
    document.getElementById("bancoSantander").innerHTML = `<br><strong>INGRESE LOS PRIMEROS 6 DIGITOS DE SU TARJETA SANTANDER: </strong> <input type="text" id= "tarjetaSantander" required><br>`;;
    if(document.getElementById("selectSantander").value = 0)
    document.getElementById("bancoSantander").innerHTML = "";


/*
        if(document.getElementById("selectSantander").value!=0){
        document.getElementById("bancoSantander").innerHTML = `<br><strong>INGRESE LOS PRIMEROS 6 DIGITOS DE SU TARJETA SANTANDER: </strong> <input type="text" id= "tarjetaSantander" required><br>`;
        return true;
        }else{
        document.getElementById("bancoSantander").innerHTML =`<div></div>`;
    }
*/
    
}

function tarjetaNevada(){
    document.getElementById("tarjetaNevada").innerHTML = `<br><strong>LOS PRIMEROS 6 DIGITOS DE SU TARJETA NEVADA: </strong> <input type="text" id= "tarjetaNevada" required><br>`;
}

function codigoPersonal(){
    document.getElementById("codigoPersonal").innerHTML = `<br><strong>INGRESE SU CODIGO 2X1 PERSONAL: </strong> <input type="text" id= "codigoPersonal" required><br>`;
}



