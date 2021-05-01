const express = require('express');
const router = express.Router();

const administrarController = require('../controllers/administrarController.js');

router.get('/agregar', administrarController.agregar);
router.get('/stock', administrarController.stock);
router.get('/editar', administrarController.editar);
router.get('/archivados', administrarController.archivados);
router.get('/archivados', administrarController.desarchivar);

module.exports = router;