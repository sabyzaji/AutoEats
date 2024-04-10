const { OrderModel } = require('../models/order');
const { OrderItemModel } = require('../models/orderItem');

async function getOrdersWithItems() {
    try {

        // Fetch orders with orderStatus "paid"
        const orders = await OrderModel.find({ orderStatus: "paid" });
        console.log(orders);
        // Initialize an array to store orders with items
        const ordersWithItems = [];

        // Iterate through each order
        for (const order of orders) {
            // Fetch corresponding order items using orderID
            const orderItems = await OrderItemModel.find({ orderID: order._id });

            // Add the order and its items to the array
            ordersWithItems.push({
                order,
                orderItems
            });
        }

        return ordersWithItems;
    } catch (error) {
        throw new Error(`Error retrieving orders with items: ${error.message}`);
    }
}

const getAcptOrdersWithItems = async () => {
    try {

        // Fetch orders with orderStatus "paid"
        const orders = await OrderModel.find({ orderStatus: "cooking" });
        console.log(orders);
        // Initialize an array to store orders with items
        const ordersWithItems = [];

        // Iterate through each order
        for (const order of orders) {
            // Fetch corresponding order items using orderID
            const orderItems = await OrderItemModel.find({ orderID: order._id });

            // Add the order and its items to the array
            ordersWithItems.push({
                order,
                orderItems
            });
        }

        return ordersWithItems;
    } catch (error) {
        throw new Error(`Error retrieving orders with items: ${error.message}`);
    }
}

const getDeliveredOrdersWithItems = async () => {
    try {

        // Fetch orders with orderStatus "paid"
        const orders = await OrderModel.find({ orderStatus: "delivered" });
        console.log(orders);
        // Initialize an array to store orders with items
        const ordersWithItems = [];

        // Iterate through each order
        for (const order of orders) {
            // Fetch corresponding order items using orderID
            const orderItems = await OrderItemModel.find({ orderID: order._id });

            // Add the order and its items to the array
            ordersWithItems.push({
                order,
                orderItems
            });
        }

        return ordersWithItems;
    } catch (error) {
        throw new Error(`Error retrieving orders with items: ${error.message}`);
    }

}


const updateOrderStatusToCooking = async (orderId) => {

    try {
        const order = await OrderModel.findOne({ _id: orderId });

        if (order) {
            order.orderStatus = "cooking";
            await order.save();
            return "Order status updated to cooking successfully";
        } else {
            throw new Error("Order not found");
        }
    } catch (error) {
        console.error("Error updating order status to cooking:", error);
        throw new Error(`Error updating order status to cooking: ${error.message}`);
    }
};


const updateOrderStatusToDelivered = async (orderId) => {

    try {
        const order = await OrderModel.findOne({ _id: orderId });

        if (order) {
            order.orderStatus = "delivered";
            await order.save();
            return "Order status updated to delivered successfully";
        } else {
            throw new Error("Order not found");
        }
    } catch (error) {
        console.error("Error updating order status to cooking:", error);
        throw new Error(`Error updating order status to cooking: ${error.message}`);
    }
};

module.exports = {
    getOrdersWithItems,
    updateOrderStatusToCooking,
    getAcptOrdersWithItems,
    getDeliveredOrdersWithItems,
    updateOrderStatusToDelivered
};
