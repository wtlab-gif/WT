const express = require('express');
const router = express.Router();
const Aadhar = require('../models/Aadhar');

router.post('/', async (req, res) => {
  try {
    const data = await Aadhar.create(req.body);
    res.json({ message: 'Application received', data });
  } catch (error) {
    res.status(500).json({ error: 'Submission failed' });
  }
});

module.exports = router;
