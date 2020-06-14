'use scrict'

const service = require('../services/freight-table/freight-table-service');
const express = require('express');
const router = express.Router();

router.get('/rate', service.getRate);

module.exports = router;