
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
    
    var valorSantander;
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
    var valorNevada;
    document.getElementById("tarjetaNevada").innerHTML = `<div class="row"><div class="col-md-6"><strong>LOS PRIMEROS 6 DIGITOS DE SU TARJETA NEVADA: </strong></div><div class="col-md-6"> <input type="text" maxlength="6" id= "tarjetaNevada" class="form-control" required></div>`;
    valorNevada = document.getElementById("selectNevada").value;
    document.getElementById("subtotalNevada").innerHTML = `<td><strong>$ ${valorNevada * 75} </strong></td>`;
    calcularTotal(valorNevada*75)
}

function codigoPersonal(){
    
    var valorPersonal;
    document.getElementById("codigoPersonal").innerHTML = `<div class="row">    
<div class="col-md-6"><strong>LOS PRIMEROS 6 DIGITOS DE SU TARJETA NEVADA: </strong></div>
<div class="col-md-6"> <input type="text" maxlength="6" id= "tarjetaNevada" class="form-control" required></div>
</div>`;
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

function trasnoche(){
    var dia = new Date(document.getElementById("fechaticket").value).getDay();
   

       if (dia==4){

    document.getElementById("agregarhorario").innerHTML =`
                                    <select class="form-control" name="horario" >
                                            <option value="0">14:00</option>
                                            <option value="1">14:30</option>
                                            <option value="2">21:00</option>
                                            <option value="3">21:30</option>
                                            <option value="4">22:00</option>
                                            <option value="5">22:30</option>
        
                                            
                                        </select>`;
    }else{

    document.getElementById("agregarhorario").innerHTML =`
                                    <select class="form-control" name="horario" >
                                            <option value="0">14:00</option>
                                            <option value="1">14:30</option>
                                            <option value="2">21:00</option>
                                            <option value="3">21:30</option>
                                             </select>`;
    }



    //.getElementById("agregarhorario").innerHTML =  dia;

}