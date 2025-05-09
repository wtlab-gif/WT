const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/employees', { useNewUrlParser: true, useUnifiedTopology: true });

// Employee schema and model
const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  salary: Number,
});
const Employee = mongoose.model('Employee', employeeSchema);

// CRUD routes
app.get('/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

app.post('/employees', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.json(employee);
});

app.put('/employees/:id', async (req, res) => {
  const { id } = req.params;
  const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedEmployee);
});

app.delete('/employees/:id', async (req, res) => {
  const { id } = req.params;
  await Employee.findByIdAndDelete(id);
  res.json({ message: 'Employee deleted' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));