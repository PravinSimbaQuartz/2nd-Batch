const bookModel = require("../model/bookModel")
const userModel = require("../model/usermodel")


const createBook = async (req, res) => {
    try {
        const { title, description, category, subCategory, author, bookImages, authorId } = req.body
        const createdBook = await bookModel.create({ title, description, category, subCategory, author, bookImages, authorId })
        res.status(201).send({ message: "Book created successfully", createdBook })
    } catch (error) {
        res.status(500).send({ error: error.message })
        // res.status(500).send({ error: error.message })
    }
}

// try and catch block
//try => if any error happned in try block then it will not excute the next line it will jump
//       to catch block

//catch => catch block will  print whatever error happened on try block

const getAllBooks = async (req, res) => {
    try {
        const data = await bookModel.find()
        const count = await bookModel.countDocuments()
        res.status(200).send({ message: "All books fetch successfully", count, data })
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
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

const updateBook = async (req, res) => {
    const id = req.params.id
    const { title, description, category, subCategory, author, bookImages, authorId } = req.body

    const updatedData = await bookModel.findOneAndUpdate(
        { _id: id },
        { title, description, category, subCategory, author, bookImages, authorId },
        { new: true })

    res.send({ message: "Book updated successfully", updatedData })

}

const deleteBook = async (req, res) => {
    const id = req.params.id


    const deletedData = await bookModel.findByIdAndDelete({ _id: id })

    res.send({ message: "Book deleted successfully", deletedData })

}






module.exports = { createBook, getAllBooks, getSingleBook, updateBook, deleteBook }