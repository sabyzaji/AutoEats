const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connectionLink = "mongodb://localhost:27017/AutoEats"
        const connection = await mongoose.connect(connectionLink)
        console.log('Connected to  Database....')
        return connection
    } catch (err) {
        console.log(err)
        throw new httpErrors(403, "can't connect to the database....")
    }
}

module.exports = connectDB