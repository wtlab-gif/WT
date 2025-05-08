const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Ticket = require('./models/Ticket');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // serve HTML

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ticketsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create ticket
app.post('/tickets', async (req, res) => {
  const ticket = new Ticket(req.body);
  await ticket.save();
  res.json({ message: 'Ticket booked!', ticket });
});

// Read all tickets
app.get('/tickets', async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
});

// Update ticket
app.put('/tickets/:id', async (req, res) => {
  const updated = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: 'Ticket updated', updated });
});

// Delete ticket
app.delete('/tickets/:id', async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.json({ message: 'Ticket deleted' });
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
