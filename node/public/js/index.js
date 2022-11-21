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
            localStorage_window(json);
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
    //amount blur
    $(".amountInput").blur(function(){
        console.log("amountinut");
    })

});
function getData(json){
    get_data_dni(json);
    get_data_name(json);
    get_data_account_type(json);
    get_data_amount(json);
    get_data_client_type(json);
    get_data_entry_date(json);
    


}
function localStorage_window(json){
    console.log(json.dni)
    var cliente = new accountObj(json[0].dni, json[0].name, json[0].account_type, json[0].amount, json[0].client_type, json[0].entry_date);
    localStorage.setItem('test', cliente);
    console.log('retrievedObject: ', cliente);
}
function get_data_dni(json){
    var numDni = 1;
    var numArray =0;
    var dniValue = json[0].dni;
    var dniText = "'#d"+numDni+":text'"
    //let array = Object.values(json);
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
    for (let numDni = 1; numDni <= 10; numDni++) {
        var dniText = "#n"+numDni+":text"
        $(dniText).val(json[numArray].name);
        numArray++;
    }
}
function get_data_account_type(json){
    type_of_accounts = ["Savings account", "Investement account", "Personal account", "Solidary account", "Individual Savings Account", "Fixed deposit account", "Tax-Free Savings Account"]
    var numDni = 1;
    var numArray =0;
    var dniText = "#c"+numDni
    //let array = Object.values(json);

    for (let numDni = 1; numDni <= 10; numDni++) {
        
        var dniText = "#c"+numDni
        //$(dniText).val(json[numArray].account_type);

            //$(dniText).append("<option selected>"+json[numArray].account_type+"</option>");  
            $(dniText).append("<option selected>"+json[numArray].account_type+"</option>");      
       

        for(let i = 0; i<type_of_accounts.length; i++){
            //console.log(type_of_accounts[i]);
            $(dniText).append("<option>"+type_of_accounts[i]+"</option>");
        }
        numArray++;

    }   
    
}
function get_data_amount(json){
    var numDni = 1;
    var numArray =0;
    var dniText = "'#a"+numDni+":text'";
    //let array = Object.values(json);
    for (let numDni = 1; numDni <= 10; numDni++) {
        var dniText = "#a"+numDni+":text"
        $(dniText).val(json[numArray].amount+" €");//coger amount
        numArray++;
    }
}
function get_data_client_type(json){
    var numDni = 1;
    var numArray =0;
    var dniText = "'#ct"+numDni+":text'"
    //let array = Object.values(json);

    for (let numDni = 1; numDni.length; numDni++) {
        if(json[numArray].amount<=10000){
            console.log(json[numArray])
            var dniText = "#ct"+numDni+":text";//indica la cerda conde escribe
            $(dniText).val("Poor client");//lo que hay que escribir dentro de la celda
        } else if(json[numArray].amount>10000 && json[numArray].amount<100000){
            var dniText = "#ct"+numDni+":text";
            $(dniText).val("Normal client");
        } else if(json[numArray].amount>100001){
            var dniText = "#ct"+numDni+":text";
            $(dniText).val("Very rich client");
        }
        //var dniText = "#ct"+numDni+":text"
        //$(dniText).val(json[numArray].dni);
        numArray++;
    }
}
function get_data_entry_date(json){
    var numDni = 1;
    var numArray =0;
    var dniText = "'#e"+numDni+":text'"
    
    for (let numDni = 1; numDni <= 10; numDni++) {
        var dniText = "#e"+numDni+":text"
        const fecha = new Date(json[numArray].entry_date)
        $(dniText).val((fecha.getMonth()+1) +"/"+fecha.getDate() + "/" + fecha.getFullYear());
        numArray++;
    }
}

