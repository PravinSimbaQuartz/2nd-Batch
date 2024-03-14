const bookModel = require("../model/bookModel")
const userModel = require("../model/usermodel")


const createBook = async (req, res) => {
    const { title, description, category, subCategory, author, bookImages, authorId } = req.body

    const createdBook = await bookModel.create({ title, description, category, subCategory, author, bookImages, authorId })

    res.send({ message: "Book created successfully", createdBook })
}

const getAllBooks = async (req, res) => {
    const data = await bookModel.find()
    const count = await bookModel.countDocuments()
    res.send({ message: "All books fetch successfully", count, data })
}

const getSingleBook = async (req, res) => {
    const id = req.params.id

    const bookData = await bookModel.findOne({ _id: id })
    const authorData = await userModel.findOne({ _id: bookData.authorId })
    const allBookData = {
        bookData,
        authorData
    }


    res.send({ message: "Book fetch successfully", allBookData })

}
module.exports = { createBook, getAllBooks, getSingleBook }