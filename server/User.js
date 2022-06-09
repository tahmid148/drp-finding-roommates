const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://boringblobking:blobking@cluster0.nkkqj.mongodb.net/?retryWrites=true&w=majority",
                 () => { console.log("connected") })

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

module.exports = mongoose.model("User", userSchema)