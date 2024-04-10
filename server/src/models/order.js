const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const orderSchema = new mongoose.Schema({

    userID: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        default: "paid"
    },
    totalAmount: {
        type: Number,
        required: true
    },
    deliveryAddress: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const OrderModel = mongoose.model("Order", orderSchema);

module.exports = { OrderModel };


































// const mongoose = require('mongoose');
// const { v4: uuidv4 } = require('uuid');

// const orderSchema = mongoose.Schema(
//     {
//         orderID: {
//             type: String,
//             default: uuidv4
//         },
//         userID: {
//             type: String,
//             // required: true
//         },
//         orderDate: {
//             type: Date,
//         },
//         orderStatus: {
//             type: String,
//             // required: true
//         },
//         totalAmount: {
//             type: Number,
//         },
//         paymentStatus: {
//             type: String,
//         },
//         deliveryAddress: {
//             type: String
//         },

//         specialInstructions: {
//             type: String
//         },
//         taxAmount: {
//             type: Number
//         },
//         // deliveryTime: {
//         //     type: Date
//         // },
//         // paymentMethod: {
//         //     type: String,
//         //     required: true
//         // },
//         // deliveryPreference: {
//         //     type: String
//         // },
//         // promoCode: {
//         //     type: String
//         // },
//         // discountAmount: {
//         //     type: Number
//         // },
//         // orderCompletionDate: {
//         //     type: Date
//         // },
//         // cancellationReason: {
//         //     type: String
//         // }
//     },
//     {
//         timestamps: true
//     }
// );

// const OrderModel = mongoose.model("Order", orderSchema);

// module.exports = { OrderModel };
