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




// module.exports = samppleFunction
// module.exports = createUser
// module.exports = getUser

module.exports = { samppleFunction, createUser, getUser }


// nodejs => async
//await => completely excute the current line then jump to next line




//MVC module => model, view, controller