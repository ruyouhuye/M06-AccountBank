$().ready(function(){

    $.ajax({
        url : 'http://localhost:3000/client',
 
        // la información a enviar
        // (también es posible utilizar una cadena de datos)
    
        // especifica si será una petición POST o GET
        type : 'GET',
    
        // el tipo de información que se espera de respuesta
        dataType : 'json',
    
        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success : function(json) {
            
            console.log(json);
            getData(json);
        },
    
        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto jqXHR (extensión de XMLHttpRequest), un texto con el estatus
        // de la petición y un texto con la descripción del error que haya dado el servidor
        error : function(jqXHR, status, error) {
            alert('Disculpe, existió un problema');
        },
    
        // código a ejecutar sin importar si la petición falló o no
        complete : function(jqXHR, status) {
            alert('Petición realizada');
        }
    })

        
});
function getData(json){
    get_data_dni(json);
    get_data_name(json);
    get_data_account_type(json);
    
    


}
function get_data_dni(json){
    var numDni = 1;
    var numArray =0;
    var dniValue = json[0].dni;
    var dniText = "'#d"+numDni+":text'"
    //let array = Object.values(json);
    console.log(json[0].dni)
    for (let numDni = 1; numDni <= 10; numDni++) {
        var dniText = "#d"+numDni+":text"
        $(dniText).val(json[numArray].dni);
        numArray++;
    }
}
function get_data_name(json){
    var numDni = 1;
    var numArray =0;
    var dniText = "'#n"+numDni+":text'"
    //let array = Object.values(json);
    console.log(json[0].dni)
    for (let numDni = 1; numDni <= 10; numDni++) {
        var dniText = "#n"+numDni+":text"
        $(dniText).val(json[numArray].name);
        numArray++;
    }
}
function get_data_account_type(json){
    var numDni = 1;
    var numArray =0;
    var dniText = "'#c"+numDni+":text'"
    //let array = Object.values(json);
    console.log(json[0].dni)
    for (let numDni = 1; numDni <= 10; numDni++) {
        var dniText = "#c"+numDni+":text"
        $(dniText).val(json[numArray].account_type);
        numArray++;
    }
}
function get_data_dni(json){
    var numDni = 1;
    var numArray =0;
    var dniValue = json[0].dni;
    var dniText = "'#d"+numDni+":text'"
    //let array = Object.values(json);
    console.log(json[0].dni)
    for (let numDni = 1; numDni <= 10; numDni++) {
        var dniText = "#d"+numDni+":text"
        $(dniText).val(json[numArray].dni);
        numArray++;
    }
}
function get_data_dni(json){
    var numDni = 1;
    var numArray =0;
    var dniValue = json[0].dni;
    var dniText = "'#d"+numDni+":text'"
    //let array = Object.values(json);
    console.log(json[0].dni)
    for (let numDni = 1; numDni <= 10; numDni++) {
        var dniText = "#d"+numDni+":text"
        $(dniText).val(json[numArray].dni);
        numArray++;
    }
}
function get_data_dni(json){
    var numDni = 1;
    var numArray =0;
    var dniValue = json[0].dni;
    var dniText = "'#d"+numDni+":text'"
    //let array = Object.values(json);
    console.log(json[0].dni)
    for (let numDni = 1; numDni <= 10; numDni++) {
        var dniText = "#d"+numDni+":text"
        $(dniText).val(json[numArray].dni);
        numArray++;
    }
}

