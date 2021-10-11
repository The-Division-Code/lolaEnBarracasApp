const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/apiController.js')

router.get('/', ApiController.index);


module.exports = router