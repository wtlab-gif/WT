const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  name: String,
  movie: String,
  seats: Number
});

module.exports = mongoose.model('Ticket', ticketSchema);
