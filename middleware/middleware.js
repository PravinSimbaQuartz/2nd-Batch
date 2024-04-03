// what is middleware =>
// middleware if a function that will have access of requesting an object and responding an object

//next in middleware =>
//pass the control to next middleware or next controller
const jwt = require("jsonwebtoken")
const authentication = async (req, res, next) => {


    const tokenFromUser = req.headers["token"] // token, x-api-key ,authorization
    if (!tokenFromUser) {
        return res.status(401).send({ message: "Please login first" })
    }

    jwt.verify(tokenFromUser, "Secrete", function (error, decoded) {
        if (error) {
            return res.status(400).send({
                message: error.message
            })
        } else {
            verifiedToken = decoded
        }
    })

    console.log(1111, "middleware is working")
    next()


}



const authorization = async (req, res, next) => {
    try {

        const userId = verifiedToken.id
        const { id } = req.params

        if (userId !== id) {
            return res.status(403).send({ message: "You are not authorized" })
        }


        next();
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


module.exports = { authentication, authorization }



//types of middleware
// 1    Application level middleware / global middleware => run  with any API
// 2    router level middleware => specific routes

// 3    built  in middleware
// 4    third  party middleware
// 5    error-handling middleware



