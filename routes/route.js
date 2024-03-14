const express = require('express');
const router = express.Router();
// const samppleFunction = require("../controller/demoController");
// const createUser = require("../controller/demoController")
// const getUser = require("../controller/demoController")
const { samppleFunction, createUser, getUser, getSingleUser, updateUser, deleteUser } = require("../controller/userController");
const { createBook, getAllBooks, getSingleBook } = require("../controller/bookController")
// router.get("/good", samppleFunction)



// user API's
router.post("/user", createUser)
router.get("/user", getUser)
router.get("/user/:id", getSingleUser)
router.put("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)


// Book API's
router.post("/book", createBook)
router.get("/book", getAllBooks)
router.get("/book/:id", getSingleBook)


module.exports = router




// HTTP methods
// post => create
// get => fetch data
// put => update
// delete => delete
// patch
