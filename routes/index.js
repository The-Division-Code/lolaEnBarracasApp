const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController.js');

const loginValidator = require('../validations/loginValidator.js');

router.get('/', indexController.index);
router.post('/', loginValidator ,indexController.procesoLogin);

module.exports = router;