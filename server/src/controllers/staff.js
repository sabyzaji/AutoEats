const { getOrdersWithItems, createNewEmP, staffDetailsIdPassed } = require('../services/staffServices');
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
    try {
        const message = await updateOrderStatusToCooking(orderId);
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

module.exports = {
    getAllOrdersWithItems,
    updateOrderStatus,
    getAcceptedOrdersList,
    getDeliveredOrdersList,
    updateOrderStatustoDel,
    staffRegistration,
    fetchStaffById

};
