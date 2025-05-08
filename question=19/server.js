const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Serve feedback form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'feedback.html'));
});

// Handle POST request
app.post('/submit-feedback', (req, res) => {
  const { name, email, rating, comments } = req.body;
  
  // Simulate response
  let message = `Thank you, ${name}! Your feedback with a rating of ${rating} has been received.`;
  res.send(`<h2>${message}</h2><a href="/">Go back</a>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
