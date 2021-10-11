const express = require('express');
const router = express.Router();
const uploadImage = require('../middleware/uploadImg')

const administrarController = require('../controllers/administrarController.js');

router.post('/agregar', uploadImage.any(), administrarController.agregando);

module.exports = router;