const express = require('express');
const router = new express.Router();

const reporte = require('../Controlador/reporte');

router.route('/reporte/insertar').post(reporte.insertar)
router.route('/reporte/obtener/:carnet').get(reporte.obtener)
router.route('/reporte/obtenertodos').get(reporte.obtenerTodos)

module.exports = router