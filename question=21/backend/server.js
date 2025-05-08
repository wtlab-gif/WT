const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/aadharDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Schema definition
const AadharSchema = new mongoose.Schema({
  fullName: String,
  dob: String,
  address: String,
  phone: String,
  email: String,
  gender: String
});

// Model
const Aadhar = mongoose.model('Aadhar', AadharSchema);

// Route to handle POST request
app.post('/apply-aadhar', async (req, res) => {
  try {
    const newEntry = new Aadhar(req.body);
    await newEntry.save();
    res.json({ message: "Aadhar application submitted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error submitting application.", error: err });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
