
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

var valorPersonal;
var valorSantander;
var valorNevada;
var total = 0;

/*function funcionHola() {
    
        document.getElementById("campoHola").innerHTML = "hola guachin";
    
}
*/
function calcularTotal(numero){

    ;
    total = total + numero ;
    document.getElementById("precioTotal").innerHTML = `<h3 class= "alert alert-warning">El total a pagar es $${total}</h3>`;
}


function tarjetaSantander(){
    
    
    document.getElementById("bancoSantander").innerHTML = `<br><div class="row"><div class="col-md-6"><label>INGRESE LOS PRIMEROS 6 DIGITOS DE SU TARJETA SANTANDER:</label></div><div class="col-md-6">  <input type="text" maxlength="6" id= "tarjetaSantander" class="form-control" required></div>`;
    valorSantander = document.getElementById("selectSantander").value;
    document.getElementById("subtotalSantander").innerHTML = `<strong>$ ${valorSantander * 75} </strong>`;
    calcularTotal(valorSantander*75);

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
    document.getElementById("tarjetaNevada").innerHTML = `<div class="row"><div class="col-md-6"><strong>LOS PRIMEROS 6 DIGITOS DE SU TARJETA NEVADA: </strong></div><div class="col-md-6"> <input type="text" maxlength="6" id= "tarjetaNevada" class="form-control" required></div>`;
    valorNevada = document.getElementById("selectNevada").value;
    document.getElementById("subtotalNevada").innerHTML = `<td><strong>$ ${valorNevada * 75} </strong></td>`;
    calcularTotal(valorNevada*75)
}

function codigoPersonal(){
    document.getElementById("codigoPersonal").innerHTML = `<br><div class="row"><div class="col-md-6"><strong>INGRESE SU CODIGO 2X1 PERSONAL: </strong></div><div class="col-md-6"> <input type="text" maxlength="6" id= "codigoPersonal" class="form-control" required></div>`;
    valorPersonal = document.getElementById("selectPersonal").value;
    document.getElementById("subtotalPersonal").innerHTML = `<td><strong>$ ${valorPersonal * 75} </strong></td>`;
    calcularTotal(valorPersonal*75)
}

/*
function subtotal(){

    var valor = document.getElementById("selectSantander").value
    document.getElementById("subtotalSantander").innerHTML = "5"+valor * 75
    }

*/

