const { MenuModel } = require('../models/menu')
const { UserModel } = require("../models/user")
const { OrderModel } = require("../models/order")
const { OrderItemModel } = require('../models/orderItem')


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


module.exports = {
    newItem,
    fetchAllCustomers,
    fetchOrdersId,
    AvailabilityChange,
    CustomerDetailsIdPassed
}