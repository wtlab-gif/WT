const express = require('express');
const router = express.Router();
const { deliveries } = require('../data');

router.get('/:orderId', (req, res) => {
  const delivery = deliveries.find(d => d.orderId == req.params.orderId);
  res.json(delivery);
});
module.exports = router;
