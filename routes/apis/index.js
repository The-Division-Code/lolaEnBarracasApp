const express = require('express');
const router = express.Router();

const indexAPIController = require('../../controllers/apis/indexAPIController.js');

router.get('/', indexAPIController.index);
router.get('/:username', indexAPIController.user)

module.exports = router;