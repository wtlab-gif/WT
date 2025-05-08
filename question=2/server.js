const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/jokeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Joke Schema
const jokeSchema = new mongoose.Schema({
  setup: String,
  punchline: String,
  date: { type: Date, default: Date.now }
});
const Joke = mongoose.model('Joke', jokeSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route: Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route: Fetch joke & insert into DB
app.post('/get-joke', async (req, res) => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/jokes/random');
    const { setup, punchline } = response.data;

    const newJoke = new Joke({ setup, punchline });
    await newJoke.save();

    res.send(`
      <h2>Joke Saved!</h2>
      <p><strong>Setup:</strong> ${setup}</p>
      <p><strong>Punchline:</strong> ${punchline}</p>
      <a href="/">Get Another Joke</a>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch or save joke.');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
