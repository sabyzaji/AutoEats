const userServices = require("../services/userServices")
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

async function userLogin(req, res, next) {
    try {
        const { phoneNumber, password } = req.body
        const loggedUserId = await userServices.userLogin(phoneNumber, password)
        const { refreshToken, accessToken } = await userServices.generateTokens(loggedUserId)
        await userServices.saveTokens(loggedUserId, refreshToken)
        res.cookie('rtoken', refreshToken, { httpOnly: true, maxAge: authConfig.cookieExpiry.maxAge });
        return res.send({ userLogin })
    } catch (err) {
        console.log(err)
        next(httpErrors(401, 'Unauthorized : Login failed!'))
    }
}



module.exports = {
    createUser,
    userLogin
}