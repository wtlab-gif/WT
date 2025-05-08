const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'passport.html'));
});

app.post('/apply-passport', (req, res) => {
    console.log("----- Application Received -----");
    console.log(req.body); // This should print the form data
    console.log("--------------------------------");
  
    res.send('<h2>Application Submitted!</h2><a href="/">Go Back</a>');
  });
  

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
