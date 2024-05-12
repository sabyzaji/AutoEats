const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const staffSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true
        },
        adharId: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        gender: {
            type: String,
            required: true
        },
        no_of_orders_taken: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const StaffModel = mongoose.model("Staff", staffSchema);

module.exports = { StaffModel };
