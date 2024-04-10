const bcrypt = require('bcrypt');
const { UserModel } = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// const { RefreshTokenModel } = require("../models/refreshTokenModel");
const { authConfig } = require('../config/authConfig');
const { MenuModel } = require('../models/menu');
const { OrderItemModel } = require("../models/orderItem");
const { OrderModel } = require("../models/order");


async function newUser(signupData) {
    try {
        const { name, email, password, phoneNumber } = signupData
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const findUser = await UserModel.findOne({ phoneNumber: phoneNumber })
        if (!findUser) {
            const user = await UserModel.create({
                name: name,
                email: email,
                password: hashedPassword,
                phoneNumber: phoneNumber
            })
            // const rootFolder = await itemServices.createRootFolder(user._id)

            return { user }
        }
        throw new Error("sorry user with same phoneNUmber Exist")
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function userLogin(phoneNumber, password) {
    try {
        const user = await UserModel.findOne({ phoneNumber: phoneNumber })
        // console.log(phoneNumber)
        if (!user) {
            throw new Error("User not found!!..");
        }
        const isVerified = await bcrypt.compare(password, user.password)
        // console.log(password);
        if (!isVerified) {
            throw new Error("Failed to Authenticate");
        }
        return user._id
    } catch (err) {
        console.log(err)
        throw err
    }
}



// async function generateTokens(userId) {
//     try {
//         const accessToken = jwt.sign(
//             { userId },
//             authConfig.secrets.accessToken,
//             { expiresIn: authConfig.tokenExpiry.accessTokenExp }
//         )
//         const refreshToken = jwt.sign(
//             { userId },
//             authConfig.secrets.refreshToken,
//             { expiresIn: authConfig.tokenExpiry.refreshTokenExp }
//         )
//         return { accessToken: accessToken, refreshToken: refreshToken }
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }



// async function saveTokens(userId, refreshToken) {
//     try {
//         const findUser = await RefreshTokenModel.findOne({ userId })
//         if (!findUser) {
//             const saveToken = await new RefreshTokenModel({
//                 userId: userId,
//                 refreshToken: refreshToken,
//             })
//             console.log("The user not existed so created...")
//             await saveToken.save();
//         } else {
//             const updateToken = await RefreshTokenModel.findOneAndUpdate(
//                 { userId: userId },
//                 { refreshToken: refreshToken },
//                 { upsert: true, new: true }
//             )
//             console.log("The user is existed so token is replaced...")
//             await updateToken.save();
//         }
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }


// async function userLogout(user) {
//     try {
//         const refreshToken = await RefreshTokenModel.deleteOne({ userId: user._id })
//         if (!refreshToken) {
//             throw err
//         }
//         return (refreshToken)
//     } catch (err) {
//         console.log(err)
//         throw err
//     }
// }

async function fetchAllItems(fieldToFetch) {
    try {
        const items = await MenuModel.find().select(fieldToFetch.join(' '));
        return (items);
    } catch (error) {
        console.log(error, "error found");

    }
}

async function createOrder(userID, items, totalAmount, seatNumber) {
    try {
        const order = new OrderModel({
            userID,
            totalAmount,
            deliveryAddress: seatNumber
        });
        const savedOrder = await order.save();
        // console.log("ordertable created")

        const orderItems = items.map(item => ({
            orderID: savedOrder._id,
            itemID: item.itemID,
            itemName: item.itemName,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            // totalPrice: item.quantity * item.unitPrice
        }));
        // console.log(orderItems)
        await OrderItemModel.insertMany(orderItems);

        return savedOrder;
    } catch (error) {
        throw error;
    }
}

// async function createOrder(userID, items, totalAmount, seatNumber) {
//     try {

//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ userID, items, totalAmount, seatNumber })
//         };

//         const response = await fetch('https://your-api-endpoint.com/createOrder', requestOptions);
//         if (!response.ok) {
//             throw new Error('Failed to create order');
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         throw error;
//     }
// }


module.exports = {
    newUser,
    userLogin,
    fetchAllItems,
    createOrder
}