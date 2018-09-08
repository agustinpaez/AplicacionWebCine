
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

    document.getElementById("bancoSantander").innerHTML = `<br><strong>INGRESE LOS PRIMEROS 6 DIGITOS DE SU TARJETA SANTANDER: </strong> <input type="text" id= "tarjetaSantander" required><br>`;;
   
    var valorSantander = document.getElementById("selectSantander").value;
    document.getElementById("subtotalSantander").innerHTML = `<strong>$ ${valorSantander * 75} </strong>`;


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
    var valorNevada = document.getElementById("selectNevada").value;
    document.getElementById("subtotalNevada").innerHTML = `<td><strong>$ ${valorNevada * 75} </strong></td>`;

}

function codigoPersonal(){
    document.getElementById("codigoPersonal").innerHTML = `<br><strong>INGRESE SU CODIGO 2X1 PERSONAL: </strong> <input type="text" id= "codigoPersonal" required><br>`;
    var valorPersonal = document.getElementById("selectPersonal").value;
    document.getElementById("subtotalPersonal").innerHTML = `<td><strong>$ ${valorPersonal * 75} </strong></td>`;

}

/*
function subtotal(){

    var valor = document.getElementById("selectSantander").value
    document.getElementById("subtotalSantander").innerHTML = "5"+valor * 75
    }

*/

