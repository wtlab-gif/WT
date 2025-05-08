const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow requests from frontend

// GET route to calculate bill
app.get('/calculate-bill', (req, res) => {
  const start = parseFloat(req.query.start);
  const end = parseFloat(req.query.end);

  if (isNaN(start) || isNaN(end) || end <= start) {
    return res.status(400).json({ error: 'Invalid input: ending reading must be greater than starting.' });
  }

  const unitsUsed = end - start;
  const ratePerUnit = 5.0; // Example rate ₹5 per unit
  const billAmount = unitsUsed * ratePerUnit;

  res.json({ bill: billAmount.toFixed(2) });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
