'use strict'
const port =process.env.PORT || 3000
//importacions i creació de constants per a la seva utiliutzació
const express = require('express')
const bodyParser=require('body-parser')
const app=express()
//configuració del bodyParser perquè admeti entrades json
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//-----------------------------------------------------------------------------

//COMPTE: hem d'instal·lar mysql per a Node Express amb npm i -S mysql
//importem mysql
const mysql = require('mysql');

//declarem els paràmetres de connexió (millor si l’usuari de connexió no és root sinó un usuari específic per aquesta BBDD
// i amb permissos restringits
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'm06',
    user: 'root',
    password: ''
});

//fem servir la BBDD que tenim
app.post('/api/client', function (req, res) {

    console.log("estem a login");

    //provem de connectar-nos i capturar possibles errors
    connection.connect(function(err){
        console.log(err);
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
        //si la conexion a ido bien
        console.log('Connected as id ' + connection.threadId);
    });

    //Si estamos conectados hacemos la query
    connection.query('SELECT * FROM cliente ', function(error, results,field){
        if (error){// si hay un error en la consulta
            res.status(400).send({resultats: null});
        }else{//si todo va okey
            res.status(200).send({resultats: results});
        }
    });//end connection.query
    //connection.end();

});//end app de login

app.listen(port, ()=>{
    console.log(`Aquesta és la nostra API-REST que corre en http://localhost:${port}`)
});