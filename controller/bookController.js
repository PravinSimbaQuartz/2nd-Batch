const bookModel = require("../model/bookModel")


const createBook = async (req, res) => {
    const { title, description, category, subCategory, author, bookImages } = req.body

    const createdBook = await bookModel.create({ title, description, category, subCategory, author, bookImages })

    res.send({ message: "Book created successfully", createdBook })


}

module.exports = { createBook }