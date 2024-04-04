const userModel = require("../model/usermodel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


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
        password,
        title } = req.body

    const generateSalt = await bcrypt.genSalt(10)  // it will take ramdom 10 characters and generate a string
    const hashPassword = await bcrypt.hash(password, generateSalt) //it will mix password and generated string

    if (!email) {
        return res.status(400).send({ message: "Email is required" })
    }
    if (!mobileNumber) {
        return res.status(400).send({ message: "mobileNumber is required" })
    }

    const checkEmail = await userModel.findOne({ email: email })
    if (checkEmail) {
        return res.status(409).send({ message: "Email already use please try another email" })
    }


    const userData = await userModel.create({
        firstName,
        lastName,
        address,
        mobileNumber,
        gender,
        email,
        isActive,
        title,
        password: hashPassword
    })
    res.send({ message: "User created successfully", userData })
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).send({ message: "Email and password are required" })
        }

        const checkEmail = await userModel.findOne({ email: email })
        if (!checkEmail) {
            return res.status(404).send({ message: "Email not found/registered" })
        }

        const ismatchPassword = await bcrypt.compare(password, checkEmail?.password)
        if (!ismatchPassword) {
            return res.status(400).send({ message: "wrong password" })
        }

        // 1. payload, 2. Secrete key, 3. time validity
        const token = jwt.sign({ name: checkEmail.firstName, email: checkEmail.email, id: checkEmail._id },
            "Secrete",
            { expiresIn: "1h" })

        res.status(200).send({ message: "login successful", token })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}





// const getUser = async (req, res) => {

//     // const abc = req.query.isActive
//     const userData = await userModel.find({ isActive: req.query.isActive })
//     const count = await userModel.countDocuments({ isActive: req.query.isActive })
//     res.send({ message: "User fetch successfully", count, userData })
// }




const getUser = async (req, res) => {
    const { isActive, gender } = req.query
    let searchCriteria = {}
    // if (isActive) {
    //     searchCriteria.isActive = searchCriteria.isActive === "true" ? false : true
    // }

    if (isActive === "true") {
        searchCriteria.isActive = true
    } else if (isActive === "false") {
        searchCriteria.isActive = false
    }

    if (gender) {
        searchCriteria["$and"] = [{ gender: gender }]
    }


    const userData = await userModel.aggregate([
        { $match: searchCriteria },
        {
            $sort: {
                createdAt: -1
            }
        },
    ])
    res.send({ message: "User fetch successfully", userData })
}




const getSingleUser = async (req, res) => {
    try {
        const id = req.params.id

        // const userData = await userModel.findOne({ email: "abc@gmail.com" })
        // const userData = await userModel.findOne({ _id: "65e570a4150a086d6c0d21fa" })
        const userData = await userModel.findById({ _id: id })
        if (!userData) {
            return res.status(404).send({
                message: "User not found"
            })
        }

        res.status(200).send({ message: "User fetch successfully", userData })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// 1. update ? 
// 2. which things to update ?
const updateUser = async (req, res) => {
    const id = req.params.id
    const { firstName,
        lastName,
        address,
        mobileNumber,
        gender,
        email,
        isActive,
        title
    } = req.body

    // const updatedData = await userModel.findOneAndUpdate(
    //     // { _id: id }, // update ?
    //     { email: "simar@gmail.com" },
    //     {
    //         firstName,
    //         lastName,
    //         address,
    //         mobileNumber,
    //         gender,
    //         email,
    //         isActive,
    //         title
    //     },// which things to update ?
    //     { new: true }// to show updated document
    // )

    const updatedData = await userModel.findByIdAndUpdate(
        { _id: id },
        {
            firstName,
            lastName,
            address,
            mobileNumber,
            gender,
            email,
            isActive,
            title
        },
        { new: true }
    )


    res.send({ message: "User update successfully", updatedData })

}


const deleteUser = async (req, res) => {
    const id = req.params.id

    const deletedUser = await userModel.findOneAndDelete({ email: "simar12345@gmail.com" })
    // const deletedUser = await userModel.findByIdAndDelete({ _id: id })

    res.send({ message: "User deleted successfully", deletedUser })
}




// module.exports = samppleFunction
// module.exports = createUser
// module.exports = getUser

module.exports = { samppleFunction, createUser, loginUser, getUser, getSingleUser, updateUser, deleteUser }


// nodejs => async
//await => completely excute the current line then jump to next line




//MVC module => model, view, controller


//_id= 0-9, a-f, 24 characters


// req.query
// req.params




// book
// bookName, description, category, subcategory, summary, title, authorName, rating,

// mongoDb Queries =>
// create, find, findOne, findById, findOneAndUpdate, findByIdAndUpdate, findByIdAndDelete, findOneAndDelete



//req.params => fetch data by id => single documents 
//useCase =

//req.query => filter the data => multiple documents / 0
//useCase = 
