const express = require('express');
const router = express.Router();
const { orders } = require('../data');

router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id == req.params.id);
  res.json(order);
});

router.post('/', (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    items: req.body.items,
    status: 'Received'
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

module.exports = router;
