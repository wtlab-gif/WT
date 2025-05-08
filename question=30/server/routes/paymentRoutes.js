const express = require('express');
const router = express.Router();
const { payments } = require('../data');

router.get('/:orderId', (req, res) => {
  const payment = payments.find(p => p.orderId == req.params.orderId);
  res.json(payment);
});
module.exports = router;