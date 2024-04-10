const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const orderItemSchema = mongoose.Schema(
    {
        orderItemID: {
            type: String,
            default: uuidv4
        },
        orderID: {
            type: String,
            // required: true
        },
        itemName: {
            type: String,
        },
        itemID: {
            type: String,
            // required: true
        },
        quantity: {
            type: Number,
            // required: true
        },
        unitPrice: {
            type: Number,
            // required: true
        },
        totalPrice: {
            type: Number,
            // required: true
        },
        // specialInstructions: {
        //     type: String
        // },
        // preparationStatus: {
        //     type: String
        // },
        // addons: {
        //     type: String
        // },
        // discount: {
        //     type: Number
        // },
        // tax: {
        //     type: Number
        // },
        totalAmount: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

const OrderItemModel = mongoose.model("OrderItem", orderItemSchema);

module.exports = { OrderItemModel };
