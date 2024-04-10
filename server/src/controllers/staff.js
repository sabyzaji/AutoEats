const { getOrdersWithItems } = require('../services/staffServices');
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

module.exports = {
    getAllOrdersWithItems,
    updateOrderStatus,
    getAcceptedOrdersList,
    getDeliveredOrdersList,
    updateOrderStatustoDel
};
