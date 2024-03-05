const userModel = require("../model/usermodel")


const samppleFunction = function (req, res) {
    res.send({ message: "All great!!!!!" })
}


const createUser = async function (req, res) {
    const {
        firstName,
        lastName,
        address,
        mobileNumber,
        gender,
        email,
        isActive,
        title } = req.body

    if (!email) {
        return res.send({ message: "Email is required" })
    }
    if (!mobileNumber) {
        return res.send({ message: "mobileNumber is required" })
    }


    const userData = await userModel.create({
        firstName,
        lastName,
        address,
        mobileNumber,
        gender,
        email,
        isActive,
        title
    })
    res.send({ message: "User created successfully", userData })
}


const getUser = async (req, res) => {
    const userData = await userModel.find()
    const count = await userModel.countDocuments()
    res.send({ message: "User fetch successfully", count, userData })
}


const getSingleUser = async (req, res) => {
    const id = req.params.Id

    console.log(3333333, id)

    // const userData = await userModel.findOne({ email: "abc@gmail.com" })
    // const userData = await userModel.findOne({ _id: "65e570a4150a086d6c0d21fa" })
    const userData = await userModel.findById({ _id: id })
    res.send({ message: "User fetch successfully", userData })
}





// module.exports = samppleFunction
// module.exports = createUser
// module.exports = getUser

module.exports = { samppleFunction, createUser, getUser, getSingleUser }


// nodejs => async
//await => completely excute the current line then jump to next line




//MVC module => model, view, controller


//_id= 0-9, a-f, 24 characters


// req.query
// req.params