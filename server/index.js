require('dotenv').config()
const path = require('path');
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../client/build')));


url = process.env.URI

mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err.message);
  })

const userSchema = new mongoose.Schema({
  name: String,
  password: Date,
})
const User = mongoose.model('User', userSchema)
// Handle GET requests to /api route
app.get("/api/users", (req, res) => {
  User.find({}).then(users => {
    res.json(users)
  })
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});