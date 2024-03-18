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
        email: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: false
        },
        registrationDate: {
            type: Date, // Changed to Date type
            required: false
        },
        gender: {
            type: String,
            required: false
        },
        dob: {
            type: Date, // Changed to Date type
            required: false
        },
        role: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
