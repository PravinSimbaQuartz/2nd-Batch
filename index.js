const express = require('express');
const mongoose = require('mongoose');
const route = require("./routes/route.js")
const app = express();



mongoose.connect("mongodb+srv://pravinpatekar:wb0enET0wmCesDqn@cluster0.ftnu4ge.mongodb.net/Batch2"
).then(() => console.log("MongoDB is connected")).catch(() => console.log(error))

app.use("/", route)

const port = 4000
app.listen(port, () => {
    console.log(`MongoDB is listening on port ${port}`)
})