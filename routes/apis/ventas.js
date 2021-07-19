const express = require('express');
const router = express.Router();

const ventasAPIController = require('../../controllers/apis/ventasAPIController.js');

router.get('/', ventasAPIController.index);
router.get('/checks', ventasAPIController.checks);

module.exports = router;