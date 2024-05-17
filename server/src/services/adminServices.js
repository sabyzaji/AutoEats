const { MenuModel } = require('../models/menu')
const { UserModel } = require("../models/user")
const { OrderModel } = require("../models/order")
const { OrderItemModel } = require('../models/orderItem')
const { StaffModel } = require('../models/staff.model')


//new item to menu
async function newItem(itemData) {
    try {
        const { itemName, description, availability, category, price, quantity_left, ingredients, imageURL, preparationTime } = itemData
        const findItem = await MenuModel.findOne({ itemName: itemName })
        if (!findItem) {
            const menu = await MenuModel.create({
                itemName: itemName,
                description: description,
                availability: availability,
                category: category,
                price: price,
                quantity_left: quantity_left,
                ingredients: ingredients,
                imageURL: imageURL,
                preparationTime: preparationTime
            })
            console.log("sucess")
            // const rootFolder = await itemServices.createRootFolder(user._id)
            return { menu }
        }
        throw new Error("Item already in menu")
    } catch (err) {
        console.log(err)
        throw err
    }
}

//customer details 

async function fetchAllCustomers() {
    try {
        const customers = await UserModel.find({});
        return customers;
    } catch (error) {
        throw new Error(`Error fetching customers: ${error.message}`);
    }
}

// fetch customer order by using customer id
async function fetchOrdersId(userId) {
    try {
        const orders = await OrderModel.find({ userID: userId })
        const ordersWithItems = [];
        for (const order of orders) {
            const orderItems = await OrderItemModel.find({ orderID: order._id });
            ordersWithItems.push({
                order, orderItems
            })
        }
        return ordersWithItems;


    } catch (error) {
        throw new Error(`Error fetching customers: ${error.message}`);
    }
}

//change the availability boolean
async function AvailabilityChange(menuId) {
    try {
        const menuItem = await MenuModel.findById(menuId);

        if (!menuItem) {
            throw new Error('Menu item not found');
        }
        menuItem.availability = !menuItem.availability;
        await menuItem.save();

        return menuItem;
    } catch (error) {
        throw new Error(`Error changing availability: ${error.message}`);
    }
}


//get the customer details where id is passed 

async function CustomerDetailsIdPassed(customerId) {
    try {
        const customer = await UserModel.find({ _id: customerId });
        return customer;
    } catch (error) {
        throw new Error(`Error fetching customers: ${error.message}`);
    }
}

//get order details 

const getOrdersList = async () => {
    try {

        // Fetch orders with orderStatus "paid"
        const orders = await OrderModel.find();
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

//find the number of times the table booked

const countTablesUsedFrequently = async () => {
    const seatNumbers = [
        "1A", "1B", "1C", "1D", "1E", "1F",
        "2A", "2B", "2C", "2D", "2E", "2F",
        "3A", "3B", "3C", "3D", "3E", "3F"
    ];

    const tableCounts = {};

    try {
        // Loop through each seat number
        for (const seatNumber of seatNumbers) {
            // Count the number of orders for the current seat number
            const ordersCount = await OrderModel.countDocuments({ deliveryAddress: seatNumber });

            // Store the count in the tableCounts object
            tableCounts[seatNumber] = ordersCount;
        }

        // Return the tableCounts object containing the counts for each table
        return tableCounts;
    } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error counting tables used frequently:", error);
        throw new Error("Failed to count tables used frequently");
    }
};

//fetch the daily order and revenue


const getDailyOrdersAndRevenue = async () => {
    const startDate = new Date('2024-04-01');
    const endDate = new Date(); // Today's date

    const pipeline = [
        {
            $match: {
                createdAt: { $gte: startDate, $lte: endDate }
            }
        },
        {
            $group: {
                _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
                totalOrders: { $sum: 1 },
                totalRevenue: { $sum: '$totalAmount' }
            }
        },
        {
            $sort: { '_id': 1 } // Sort by date in ascending order
        }
    ];

    return await OrderModel.aggregate(pipeline);
};


const staffOrderList = async () => {
    try {
        const staffMembers = await StaffModel.find();
        const staffOrders = [];

        for (const staff of staffMembers) {
            // Extract required information
            const { name: name, no_of_orders_taken: ordersTaken, createdAt: createdAt } = staff;

            // Push staff order details to staffOrders array
            staffOrders.push({ name, ordersTaken, createdAt });
        }

        // Return the staff order list
        console.log(staffOrders)
        return staffOrders;
    } catch (error) {
        console.error("Error fetching staff order list:", error);
        throw new Error(`Error fetching staff order list: ${error.message}`);
    }
};

module.exports = {
    newItem,
    fetchAllCustomers,
    fetchOrdersId,
    AvailabilityChange,
    CustomerDetailsIdPassed,
    getOrdersList,
    countTablesUsedFrequently,
    getDailyOrdersAndRevenue,
    staffOrderList
}