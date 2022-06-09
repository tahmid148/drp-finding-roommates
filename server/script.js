const express = require('express')
const mongoose = require("mongoose")
const User = require("./User")

const app = express()

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render("view1.ejs")
})

app.post('/', (req, res) => {
    const newGuy = new User({ name: req.body.name,
                              email: req.body.email,
                              password: req.body.password })
    newGuy.save().then(() => console.log("saved the dud"))
})

app.listen(3001)