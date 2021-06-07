const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },
    query: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true  
    }
})

const User = mongoose.model("Users", userSchema)

module.exports = User