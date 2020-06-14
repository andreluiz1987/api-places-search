const express = require('express');
const placesController = require('../../controllers/places-controller');
const freightController = require('../../controllers/freight-rate-controller');

let router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    version: '1.0.0'
  });
});

router.use('/places', placesController);
router.use('/freigths', freightController)

module.exports = router;