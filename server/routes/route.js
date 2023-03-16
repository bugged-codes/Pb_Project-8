const express = require('express');
const apiData = require('../api/apiData');

const router = express.Router();
router.route('/').get(apiData.apiController);

module.exports = router;
