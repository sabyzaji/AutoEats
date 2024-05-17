const { OrderModel } = require('../models/order');
const { OrderItemModel } = require('../models/orderItem');
const { StaffModel } = require('../models/staff.model');
const bcrypt = require('bcrypt');


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
        throw new Error(`Error retrieving orders with items:${error.message}`);
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
const updateOrderStatusToCooking = async (bothID) => {
    const orderId = bothID.orderId;
    const staffID = bothID.staffID;

    try {
        const order = await OrderModel.findOne({ _id: orderId });
        const staff = await StaffModel.findOne({ _id: staffID });

        if (order && staff) {
            order.orderStatus = "cooking";
            staff.no_of_orders_taken = (staff.no_of_orders_taken || 0) + 1; // Incrementing the number of orders taken
            await order.save();
            await staff.save();
            return "Order status updated to cooking successfully";
        } else {
            throw new Error("Order or staff not found");
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

//creating a new staff

const createNewEmP = async (empData) => {
    try {

        const { name, email, password, phoneNumber, adharID, gender } = empData
        console.log(empData);
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const findUser = await StaffModel.findOne({ phoneNumber: phoneNumber })
        if (!findUser) {
            const user = await StaffModel.create({
                name: name,
                email: email,
                password: hashedPassword,
                phoneNumber: phoneNumber,
                adharId: adharID,
                gender: gender,
            })
            // const rootFolder = await itemServices.createRootFolder(user._id)

            return { user }
        }
        throw new Error("sorry user with same phoneNUmber Exist")

    } catch (error) {
        console.log("error in creation", error);
    }
}


async function staffDetailsIdPassed(staffID) {
    try {
        const customer = await StaffModel.find({ _id: staffID });
        return customer;
    } catch (error) {
        throw new Error(`Error fetching customers: ${error.message}`);
    }
}



async function userLogin(phoneNumber, password) {
    try {
        const user = await StaffModel.findOne({ phoneNumber: phoneNumber })
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

async function getStaffs() {
    try {
        const staff = await StaffModel.find({});
        return staff;
    } catch (err) {
        console.log(err)
        throw err
    }
}
module.exports = {
    getOrdersWithItems,
    updateOrderStatusToCooking,
    getAcptOrdersWithItems,
    getDeliveredOrdersWithItems,
    updateOrderStatusToDelivered,
    createNewEmP,
    staffDetailsIdPassed,
    userLogin,
    getStaffs
};
