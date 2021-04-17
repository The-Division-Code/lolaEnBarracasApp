const express = require('express');
const router = express.Router();

const ventasController = require('../controllers/ventasController.js');

router.get('/remito', ventasController.remito);
router.get('/historial', ventasController.historial);
router.get('/devoluciones', ventasController.devoluciones);

module.exports = router;