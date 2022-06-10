const express = require('express')
const mongoose = require("mongoose")
const User = require("./User")
const bcrypt = require('bcrypt')

const app = express()

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render("view1.ejs")
})

app.post('/', async (req, res) => {
        const newGuy = new User({ area: req.body.area,
                                  occupation: req.body.occupation,
                                  minRentPrice: req.body.minRentPrice,
                                  maxRentPrice: req.body.maxRentPrice })
        newGuy.save().then(() => console.log("saved the dud"))
})

app.listen(3000)