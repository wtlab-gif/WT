const express = require('express');
const router = express.Router();
const { foods } = require('../data');

router.get('/', (req, res) => res.json(foods));
module.exports = router;
