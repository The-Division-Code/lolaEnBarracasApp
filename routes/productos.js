const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController.js');

router.get('/', productosController.index);

module.exports = router;