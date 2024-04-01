// what is middleware =>
// middleware if a function that will have access of requesting an object and responding an object

//next in middleware =>
//pass the control to next middleware or next controller

const authentication = async (req, res, next) => {

    console.log(1111, "middleware is working")
    next()


}
const authentication1 = async (req, res, next) => {

    console.log(2222, "middleware is working")
    next()


}
const authentication2 = async (req, res, next) => {

    console.log(3333, "middleware is working")
    next()


}
const authentication3 = async (req, res, next) => {

    console.log(4444, "middleware is working")
    next()


}

module.exports = { authentication, authentication1, authentication2, authentication3 }



//types of middleware
// 1    Application level middleware / global middleware => run  with any API
// 2    router level middleware => specific routes

// 3    built  in middleware
// 4    third  party middleware
// 5    error-handling middleware



