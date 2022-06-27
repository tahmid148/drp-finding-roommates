require('dotenv').config()
const path = require('path');
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../client/src')));
app.use(express.urlencoded({ extended: false }))

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
  age: String,
  gender: String,
  personality: String,
  min_budget: String,
  max_budget: String,
  smokes: String,
  lifestyle: String,
  has_pets: String,
  info: String
})

const User = mongoose.model('User', userSchema)

// Handle GET requests to /api route
app.get("/api/users", (req, res) => {
  User.find({}).then(users => {
    res.json(users)
  })
});

app.post("/profile", async (req, res) => {
  console.log('we here');
  console.log(req.body.name);
  console.log(req.body.age);
  console.log(req.body.info);
  const user = new User({ 
    name: req.body.name, 
    age: req.body.age, 
    gender: req.body.gender,
    personality: req.body.personality,
    min_budget: req.body.min_budget,
    max_budget: req.body.max_budget,
    smokes: req.body.smokes,
    lifestyle: req.body.lifestyle,
    has_pets: req.body.has_pets,
    info: req.body.info 
  })
  await user.save()
  res.redirect('/roommate-search')
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/src/public', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});