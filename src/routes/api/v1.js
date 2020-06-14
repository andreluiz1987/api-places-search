const express = require('express');
const placesController = require('../../controllers/places-controller');

let router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    version: '1.0.0'
  });
});

router.use('/places', placesController);

module.exports = router;