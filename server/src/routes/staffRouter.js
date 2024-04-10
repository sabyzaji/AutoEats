const express = require('express')
const staffRouter = express.Router()
const staffController = require("../controllers/staff")
staffRouter.use(express.json());

staffRouter.post('/display', staffController.getAllOrdersWithItems);//for reqested Orders
staffRouter.post('/acpOrders', staffController.getAcceptedOrdersList);//display all with status cooking
staffRouter.post('/delOrders', staffController.getDeliveredOrdersList)//display items with status delivered
staffRouter.post('/changeStatusToAcp', staffController.updateOrderStatus);//change status to Dellivered
staffRouter.post('/changeStatusToDel', staffController.updateOrderStatustoDel)

module.exports = staffRouter





//     paid  =>   cooking    =>     delivered