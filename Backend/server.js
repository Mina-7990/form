const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

const uri = process.env.DB_URI;

if (!uri) {
  console.error('DB_URI is not defined in the .env file');
  process.exit(1);
}

mongoose.connect(uri)
  .then(conn => console.log(`Database connected: ${conn.connection.host}`))
  .catch(err => {
    console.error(`Database error: ${err}`);
    process.exit(1);
  });

app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User saved successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/gethi', (req, res) => {
  res.status(200).json({ message: 'Hello from the server!' });
}
);

app.listen(5653, () => {
  console.log('Server is running on port 5653');
});
