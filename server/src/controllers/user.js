const userServices = require("../services/userServices")
const httpErrors = require('http-errors');
const MenuModel = require("../models/menu")
const addOrderItem = require("../services/userServices")
const orderServices = require("../services/userServices");

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
        const loggedUserId = await userServices.userLogin(phoneNumber, password);
        console.log(loggedUserId)

        // const { refreshToken, accessToken } = await userServices.generateTokens(loggedUserId);
        // await userServices.saveTokens(loggedUserId, refreshToken);
        // res.cookie('rtoken', refreshToken, { httpOnly: true, maxAge: authConfig.cookieExpiry.maxAge });
        return res.send({ loggedUserId })
    } catch (err) {
        console.log(err);
        // next(httpErrors(401, 'Unauthorized : Login failed!'));
    }
}

async function fetchItem(req, res, next) {
    try {
        const fieldToFetch = ["_id", 'itemName', 'description', 'availability', 'category', 'price', 'quantity_left', 'ingredients', 'imageURL', 'preparationTime']
        const items = await userServices.fetchAllItems(fieldToFetch);
        // const itemNames = items.map(item => item.itemName);
        const itemNames = items.map(item => item.itemName);
        console.log(itemNames);
        res.json(items);

    } catch (err) {
        console.log(err)

    }
}


// async function addItemToCart(req, res, next) {
//   try {
//         const { itemID, quantity, unitPrice, totalPrice, totalAmount } = req.body;
//         const { orderID, orderItem } = await addItemToCart(itemID, quantity, unitPrice, totalPrice, totalAmount);
//         res.status(201).json({ success: true, orderID, orderItem });
//     } catch (error) {
//         next(error);
//     }
// }

async function createOrder(req, res, next) {
    try {
        const { userID, items, totalAmount, seatNumber } = req.body;
        const order = await orderServices.createOrder(userID, items, totalAmount, seatNumber);
        console.log(userID, items, totalAmount, seatNumber)

        res.status(201).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createUser,
    userLogin,
    fetchItem,
    createOrder,
}