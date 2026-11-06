require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./config/db');

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

connectDB();
app.listen(port, (req,res) => {
  console.log(`Server is running on http://localhost:${port}`);
});

