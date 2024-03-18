const bcrypt = require('bcrypt');
const { UserModel } = require('../models/user')



async function newUser(signupData) {
    try {
        const { name, email, password, phoneNumber } = signupData
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const findUser = await user.findOne({ email: email })
        if (!findUser) {
            const user = await UserModel.create({
                name: name,
                email: email,
                password: hashedPassword,
                phoneNumber: phoneNumber
            })
            const rootFolder = await itemServices.createRootFolder(user._id)
            return { user, rootFolder }
        }
        throw new Error("sorry user with same email were existed")
    } catch (err) {
        console.log(err)
        throw err
    }
}


module.exports = {
    newUser
}