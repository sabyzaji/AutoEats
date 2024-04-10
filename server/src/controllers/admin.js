const adminServices = require("../services/adminServices")
const httpErrors = require('http-errors');

//create menu item
async function createItem(req, res, next) {
    try {
        const itemPayload = {
            itemName: req.body.itemName,
            description: req.body.description,
            availability: req.body.availability,
            category: req.body.category,
            price: req.body.price,
            quantity_left: req.body.quantity_left,
            ingredients: req.body.ingredients,
            imageURL: req.body.imageURL,
            preparationTime: req.body.preparationTime

        }
        console.log(itemPayload);

        const itemData = await adminServices.newItem(itemPayload)
        console.log(itemData.itemName);
        return res.send(itemData)
    } catch (err) {
        console.log(err)
        const itemError = httpErrors(401, 'Unauthorized : User item failed!');
        next(itemError)
    }
}
//customer details to display in row

async function fetchCustomers(req, res) {
    try {
        const customers = await adminServices.fetchAllCustomers(); // Invoke the function with ()

        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//fetch orders while id is passed for cusotmers

async function fetchOrdersWithId(req, res) {
    try {
        const userId = req.body.userId;

        const orders = await adminServices.fetchOrdersId(userId);
        return res.send(orders)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


//change the availability to false/true
async function changeAvailability(req, res) {
    try {
        const menuId = req.body.menuId;
        console.log(menuId)
        // Call the function to change availability
        const updatedMenuItem = await adminServices.AvailabilityChange(menuId);

        // Send the updated menu item as response
        return res.json(updatedMenuItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//customer details while id is passed 
async function fetchCustomersById(req, res) {
    try {
        const customerId = req.body.customerId;
        const customers = await adminServices.CustomerDetailsIdPassed(customerId);

        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createItem,
    fetchCustomers,
    fetchOrdersWithId,
    changeAvailability,
    fetchCustomersById,
}