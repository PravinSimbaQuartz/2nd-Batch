const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

    rating: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "book"
    },

    reviewerName: {
        type: mongoose.Schema.Types.String,
        default: "Guest",
    }
},
    {
        timestamps: true,
    });


module.exports = mongoose.model("review", reviewSchema)