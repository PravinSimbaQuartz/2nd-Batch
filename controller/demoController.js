const userModel = require("../model/usermodel")


const samppleFunction = function (req, res) {
    res.send({ message: "All great!!!!!" })
}


const createUser = async function (req, res) {
    const { firstName,
        lastName,
        address,
        mobileNumber,
        gender,
        email,
        isActive,
        title } = req.body

    console.log(1111111, req.body)

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

module.exports = samppleFunction
module.exports = createUser


// nodejs => async
//await => completely excute the current line then jump to next line




//MVC module => model, view, controller