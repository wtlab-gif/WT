const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // 👈 Add this line
app.use(express.json());

app.post('/api/register', (req, res) => {
  console.log('Received student data:', req.body);
  res.json({ message: 'Data received successfully', data: req.body });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

