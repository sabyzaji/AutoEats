

const httpErrors = require('http-errors');


async function createUser(req, res, next) {
    try {
        const signupPayload = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber
        }
        console.log(signupPayload);
        const signupData = await userServices.newUser(signupPayload)
        return res.send(signupData)
    } catch (err) {
        console.log(err)
        const signupError = httpErrors(401, 'Unauthorized : User Registration failed!');
        next(signupError)
    }
}




module.exports = {
    createUser
}