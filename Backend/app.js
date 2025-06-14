const dotenv = require('dotenv');
dotenv.config(); // Load .env first

const express = require('express');
const app = express();

const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', userRoutes);

module.exports = app;
