
var total = 0;
var subSantander = 0;
var subNevada = 0;
var subPersonal = 0;
var subDescuento = 0;


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


function calcularTotal(numero){

    ;
    total = subDescuento + subNevada + subPersonal + subSantander;
    document.getElementById("precioTotal").innerHTML = `<h3 class= "alert alert-warning">El total a pagar es $${total}</h3>`;
}

function descuentoLunMier(){

    var valorDescuento;
    valorDescuento = document.getElementById("selectDescuento").value;
    subDescuento = valorDescuento * 90;
    document.getElementById("subtotalDescuento").innerHTML = `<strong>$ ${valorDescuento * 90} </strong>`;
    calcularTotal(subDescuento);
}


function tarjetaSantander(){
    
    var valorSantander;
    document.getElementById("bancoSantander").innerHTML = `<div class="row">    
    <div class="col-md-6"><strong>INGRESE LOS PRIMEROS 6 DIGITOS DE SU TARJETA SANTANDER: </strong></div>
    <div class="col-md-6"> <input type="text" maxlength="6" id= "inputTarjetaSantander" class="form-control" required></input></div>
    </div>`;
    valorSantander = document.getElementById("selectSantander").value;
    subSantander = valorSantander * 75;
    document.getElementById("subtotalSantander").innerHTML = `<strong>$ ${valorSantander * 75} </strong>`;
    calcularTotal(subSantander);


    
}

function tarjetaNevada(){
    var valorNevada;
    document.getElementById("tarjetaNevada").innerHTML =  `<div class="row">    
    <div class="col-md-6"><strong>INGRESE LOS PRIMEROS 6 DIGITOS DE SU TARJETA NEVADA: </strong></div>
    <div class="col-md-6"> <input type="text" maxlength="6" id= "inputTarjetaNevada" class="form-control" required></input></div>
    </div>`;
    valorNevada = document.getElementById("selectNevada").value;
    subNevada = valorNevada * 75;
    document.getElementById("subtotalNevada").innerHTML = `<td><strong>$ ${valorNevada * 75} </strong></td>`;
    calcularTotal(subNevada)
}

function codigoPersonal(){
    
    var valorPersonal;
    document.getElementById("codigoPersonal").innerHTML = `<div class="row">    
    <div class="col-md-6"><strong>INGRESE SU CODIGO 2X1 PERSONAL: </strong></div>
    <div class="col-md-6"> <input type="text" maxlength="6" id= "inputCodigoPersonal" class="form-control" required></input></div>
    </div>`;
    valorPersonal = document.getElementById("selectPersonal").value;
    subPersonal = valorPersonal*75;
    document.getElementById("subtotalPersonal").innerHTML = `<td><strong>$ ${valorPersonal * 75} </strong></td>`;
    calcularTotal(subPersonal)
}


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
}