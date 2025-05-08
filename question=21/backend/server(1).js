const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const aadharRoutes = require('./routes/aadharRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/aadhar', aadharRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/aadharDB')
  .then(() => app.listen(4000, () => console.log('Server running on http://localhost:4000')))
  .catch((err) => console.error('MongoDB error:', err));
