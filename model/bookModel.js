const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        description: {     //Object
            descFirst: { type: mongoose.Schema.Types.String },
            descSecond: { type: mongoose.Schema.Types.String }
        },

        category: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        subCategory: [{     //Array of Strings
            type: mongoose.Schema.Types.String,
        }],


        author: {
            type: mongoose.Schema.Types.String,
        },

        bookImages: [{
            images: { type: mongoose.Schema.Types.String },
            type: { type: mongoose.Schema.Types.String }
        }]
    },
    {
        timestamps: true,
    })

module.exports = mongoose.model("book", bookSchema)










// address:{
//     village:
//     tal:
//     dist:
//     pinCode:
// }


// aadahar card :{
// image: "kdwjhfkwejrf"
// side:front

// image: "jweofjewkfhe"
// side:back

// }