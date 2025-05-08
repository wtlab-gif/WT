const mongoose = require('mongoose');

const aadharSchema = new mongoose.Schema({
  fullName: String,
  dob: String,
  gender: String,
  address: String,
  phone: String,
  email: String,
});

module.exports = mongoose.model('Aadhar', aadharSchema);
