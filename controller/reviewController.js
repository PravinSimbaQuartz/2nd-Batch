const reviewModel = require("../model/reviewModel");



const createReview = async (req, res) => {

    const { rating, bookId, reviewerName } = req.body;

    const review = await reviewModel.create({ rating, bookId, reviewerName })
    res.send({ message: "Review created successfully", review })
};


const getBookReview = async (req, res) => {

    const bookId = req.params.bookId

    // const reviewData = await reviewModel.findOne({ bookId: bookId })
    const reviewData = await reviewModel.find({ bookId: bookId })

    res.send({ message: "Review fetched successfully", reviewData })

};







module.exports = { createReview, getBookReview }