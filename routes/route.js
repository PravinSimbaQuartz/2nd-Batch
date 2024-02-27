const express = require('express');
const router = express.Router();


router.get("/good", (req, res) => {
    res.send({ message: "All good!!!!!" })
})

module.exports = router