const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = mongoose.Schema(
    {
        _id: {
            type: String,
            default: uuidv4
        },
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }, email: {
            type: String,
            required: true
        },
        // email: String,
        // password: String,
        username: String,
        phoneNumber: {
            type: String,
            required: true
        },
        address: String,
        registrationDate: Date,
        gender: String,
        dob: Date,
        role: String
    },
    {
        timestamps: true
    }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
