const mysql = require("mysql");
const dbConfig = require("../Config/database");

var conn = mysql.createConnection({
    host: dbConfig.hrPool.host,
    port: dbConfig.hrPool.port,
    user: dbConfig.hrPool.user,
    password: dbConfig.hrPool.password,
    database: dbConfig.hrPool.database
});

function insertar(req, res) {
    let input = req.body;
    console.log(req.body);
    if (input.carnet != "") {
        try {
            const today = new Date();
            conn.query(
                "INSERT INTO reporte (carnet, nombre, curso, descripcion,date,signature) VALUES (?,?,?,?,?,?)",
                [input.carnet, input.nombre, input.curso, input.descripcion,(today.getFullYear()+"/"+(today.getMonth()+1)+"/"+today.getDate()),process.env.Signature],
                (error, results) => {
                    if (error) {
                        res.status(500).json({
                            Mensaje: "Error en la consulta, verifique los campos de entrada",
                            Error: error,
                            Servidor: process.env.Signature
                        });
                    } else {
                        res.status(200).json({
                            Mensaje: "Reporte Ingresado Correctamente",
                            Servidor: "Solicitud atendida por "+ process.env.Signature
                        });
                    }
                }
            );
        } catch (error) {
            res.status(500).json({
                Mensaje: "Error catch",
            });
        }
    } else {
        res.status(422).json({
            Mensaje: "Faltan campos obligatorios en el JSON"
        });
    }
}

module.exports.insertar = insertar;


function obtener(req, res) {
    let input = req.params.carnet

    try {
        conn.query(
            "SELECT * FROM reporte WHERE carnet = ?",
            [input],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({
                        Mensaje: "Error en la consulta, verifique los campos de entrada",
                    });
                } else {
                    console.log(results);
                    res.status(200).json({
                        data: results,
                        Servidor: process.env.Signature
                    });
                }
            }
        );
    } catch (error) {
        res.status(500).json({
            Mensaje: "Error catch",
        });
    }
}

module.exports.obtener = obtener;


function obtenerTodos(req, res) {

    try {
        conn.query(
            "SELECT * FROM reporte",
            (error, results) => {
                if (error) {
                    res.status(500).json({
                        Mensaje: "Error en la consulta",
                    });
                } else {
                    res.status(200).json({
                        data: results,
                        Servidor: process.env.Signature
                    });
                }
            }
        );
    } catch (error) {
        res.status(500).json({
            Mensaje: "Error catch",
        });
    }
}

module.exports.obtenerTodos = obtenerTodos;