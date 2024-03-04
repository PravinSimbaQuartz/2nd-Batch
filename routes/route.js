const express = require('express');
const router = express.Router();
// const samppleFunction = require("../controller/demoController");
// const createUser = require("../controller/demoController")
// const getUser = require("../controller/demoController")
const { samppleFunction, createUser, getUser } = require("../controller/demoController");

router.get("/good", samppleFunction)
router.post("/user", createUser)
router.get("/user", getUser)

module.exports = router




// HTTP methods
// post
// get
// put
// delete
// patch
