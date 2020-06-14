'use scrict'

const service = require('../services/place-services');
const express = require('express');
const router = express.Router();

router.get('/search', service.getPlaces);

module.exports = router;
