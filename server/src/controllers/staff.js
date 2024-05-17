const { getOrdersWithItems, createNewEmP, staffDetailsIdPassed, userLogin, getStaffs } = require('../services/staffServices');
const { updateOrderStatusToCooking } = require("../services/staffServices")
const { getAcptOrdersWithItems } = require("../services/staffServices")
const { getDeliveredOrdersWithItems } = require("../services/staffServices")
const { updateOrderStatusToDelivered } = require("../services/staffServices")




async function getAllOrdersWithItems(req, res) {
    try {
        // Call the service function to get orders with items
        const ordersWithItems = await getOrdersWithItems();
        console.log(ordersWithItems)
        // Send the response
        res.json(ordersWithItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving orders with items' });
    }
}

const getAcceptedOrdersList = async (req, res) => {
    try {
        // Call the service function to get orders with items
        const ordersWithItems = await getAcptOrdersWithItems();
        console.log(ordersWithItems)
        // Send the response
        res.json(ordersWithItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving orders with items' });
    }
}

const getDeliveredOrdersList = async (req, res) => {
    try {
        // Call the service function to get orders with items
        const ordersWithItems = await getDeliveredOrdersWithItems();
        console.log(ordersWithItems)
        // Send the response
        res.json(ordersWithItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving orders with items' });
    }
}


const updateOrderStatus = async (req, res) => {

    const { orderId } = req.body;
    const { staffID } = req.body;
    const bothID = { orderId, staffID }
    try {
        const message = await updateOrderStatusToCooking(bothID);
        res.status(200).json({ message });
    } catch (error) {
        console.error("Error updating order status:", error);
        res.status(500).json({ error: error.message });
    }
};

const updateOrderStatustoDel = async (req, res) => {

    const { orderId } = req.body;
    try {
        const message = await updateOrderStatusToDelivered(orderId);
        res.status(200).json({ message });
    } catch (error) {
        console.error("Error updating order status:", error);
        res.status(500).json({ error: error.message });
    }
};

const staffRegistration = async (req, res, next) => {
    try {
        const signupPayload = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            adharID: req.body.adharID,
            gender: req.body.gender
        }

        const signupData = await createNewEmP(signupPayload)
        return res.send(signupData)
    } catch (err) {
        console.log(err)
        const signupError = httpErrors(401, 'Unauthorized : User Registration failed!');
        next(signupError)
    }

}

async function fetchStaffById(req, res) {
    try {
        const staffID = req.body.staffID;
        const staff = await staffDetailsIdPassed(staffID);

        res.json(staff);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function loginStaff(req, res, next) {
    try {
        const { phoneNumber, password } = req.body
        const loggedUserId = await userLogin(phoneNumber, password);
        console.log(loggedUserId)

        return res.send({ loggedUserId })
    } catch (err) {
        console.log(err);
        // next(httpErrors(401, 'Unauthorized : Login failed!'));
    }
}

async function getAllStaff(req, res, next) {
    try {
        const empList = await getStaffs();
        console.log(empList)
        return res.send({ empList });

    } catch (error) {
        console.log(error);

    }
}


module.exports = {
    getAllOrdersWithItems,
    updateOrderStatus,
    getAcceptedOrdersList,
    getDeliveredOrdersList,
    updateOrderStatustoDel,
    staffRegistration,
    fetchStaffById,
    loginStaff,
    getAllStaff

};
