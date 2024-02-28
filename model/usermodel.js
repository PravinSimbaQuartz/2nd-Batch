// what is Schema => perdefine content of data

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: mongoose.Schema.Types.String
    },
    lastName: {
        type: mongoose.Schema.Types.String
    },
    address: {
        type: mongoose.Schema.Types.String
    },
    mobileNumber: {
        type: mongoose.Schema.Types.Number
    }
})


module.exports = mongoose.model("user", userSchema)

