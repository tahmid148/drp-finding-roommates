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
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newGuy = new User({ name: req.body.name,
                                email: req.body.email,
                                password: hashedPassword })
        newGuy.save().then(() => console.log("saved the dud"))
    } catch {
        console.log("sorry mate, id wat to do about this")
    }
})

app.listen(3001)