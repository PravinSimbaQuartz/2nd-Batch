// what is Schema => perdefine content of data

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        enum: ["Mr", "Mrs", "Miss"]
    },

    firstName: {
        type: mongoose.Schema.Types.String,
        lowercase: true
    },
    lastName: {
        type: mongoose.Schema.Types.String,
        uppercase: true
    },
    address: {
        type: mongoose.Schema.Types.String
    },
    email: {
        type: mongoose.Schema.Types.String,
        unique: true,
        required: true,
    },
    gender: {
        type: mongoose.Schema.Types.String,
        enum: ["male", "female", "other"]
    },
    mobileNumber: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    isActive: {
        type: mongoose.Schema.Types.Boolean,
        default: true,
    }
},
    { timestamps: true }
)


module.exports = mongoose.model("user", userSchema)


//Datatypes of mongoose =>
// String= ""
// Number
// Boolean => true or false
// Object= {key: value}
// Array =[]
// ObjectId= 
// Mixed
// Array of Objects= [{key: value},{key: value}]




// undefined => intialise but doesnt get its value => undefined
// null => absence of value => Object

