const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const menuSchema = mongoose.Schema(
    {
        menuID: {
            type: String,
            default: uuidv4
        },
        itemName: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        availability: {
            type: Boolean,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity_left: {
            type: Number,
            required: true
        },
        ingredients: {
            type: String
        },
        imageURL: {
            type: String
        },
        preparationTime: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const MenuModel = mongoose.model("Menu", menuSchema);

module.exports = { MenuModel };