const userModel = require("../model/usermodel")


const samppleFunction = function (req, res) {
    res.send({ message: "All great!!!!!" })
}


const createUser = async function (req, res) {
    const userData = await userModel.create({
        firstName: "John",
        lastName: "Smith",
        address: "Amritsar",
        mobileNumber: 987654321
    })
    res.send({ message: "User created successfully", userData })
}

module.exports = samppleFunction
module.exports = createUser


// nodejs => async
//await => completely excute the current line then jump to next line




