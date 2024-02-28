const express = require('express');
const router = express.Router();
const samppleFunction = require("../controller/demoController");
const createUser = require("../controller/demoController")

router.get("/good", samppleFunction)
router.post("/user", createUser)

module.exports = router




// HTTP methods
// post
// get
// put
// delete
// patch
