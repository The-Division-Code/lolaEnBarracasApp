const express = require('express');
const router = express.Router();

const administrarController = require('../controllers/administrarController.js');

router.get('/agregar', administrarController.agregar);
router.post('/agregar', administrarController.agregando);

router.get('/stock', administrarController.stock);
router.put('/stock', administrarController.editarStock);
router.get('/editar', administrarController.editar);

router.put('/editar', administrarController.archivar)
router.get('/archivados', administrarController.archivados);
router.put('/archivados', administrarController.desarchivar);

module.exports = router;