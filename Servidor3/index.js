const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require('./Servicios/router');

let port = process.env.PORT || 3003;

const dbConfig = require("./Config/database");
//Conexi�n a la base de datos
var connection = mysql.createConnection({
    host: dbConfig.hrPool.host,
    port: dbConfig.hrPool.port,
    user: dbConfig.hrPool.user,
    password: dbConfig.hrPool.password,
    database: dbConfig.hrPool.database
});

const app = express().use(cors()).use(bodyParser()).use('/s3', router);

app.get("/", (req, res) => { res.end() });

app.listen(port, (err) => {
    if (err) console.log('Ocurrio un error'), process.exit(1);
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Conectada a la BD!");
    });
    console.log('Escuchando en el puerto ' + port);
});