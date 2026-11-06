require('dotenv').config();

const express = require('express');
const cors = require('cors');
const clientRoutes = require('./routes/client');
const app = express();
const port = 3000;
const connectDB = require('./config/db');

app.use(cors({origin: 'http://localhost:3000'})); // darouri, sinon error CORS
app.use(express.json());   // darouri, bla hada req.body ykoun undefined
app.use("/api/clients", async (req, res, next) => {
  try {
    await connectDB(); // Connect to MongoDB before handling client routes
    next();
  } catch (error) {
    res.status(500).json({ message: "Erreur de connexion à la base de données" });
  }


app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

connectDB();
app.listen(port, (req,res) => {
  console.log(`Server is running on http://localhost:${port}`);
});

