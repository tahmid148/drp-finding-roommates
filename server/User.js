const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://boringblobking:blobking@cluster0.nkkqj.mongodb.net/?retryWrites=true&w=majority",
                 () => { console.log("connected") })

const userSchema = new mongoose.Schema({
    area: String,
    occupation: String,
    minRentPrice: Number,
    maxRentPrice: Number
})

module.exports = mongoose.model("User", userSchema)