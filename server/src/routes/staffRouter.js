const express = require('express')
const staffRouter = express.Router()
const staffController = require("../controllers/staff");
staffRouter.use(express.json());

staffRouter.post('/display', staffController.getAllOrdersWithItems);//for reqested Orders
staffRouter.post('/acpOrders', staffController.getAcceptedOrdersList);//display all with status cooking
staffRouter.post('/delOrders', staffController.getDeliveredOrdersList)//display items with status delivered
staffRouter.post('/changeStatusToAcp', staffController.updateOrderStatus);//change status to Dellivered
staffRouter.post('/changeStatusToDel', staffController.updateOrderStatustoDel)//change status to delivred
staffRouter.post('/reg-staff', staffController.staffRegistration);//registration of new staff
staffRouter.post('/display-staff-profile', staffController.fetchStaffById);//display staff profile 


module.exports = staffRouter





//     paid  =>   cooking    =>     delivered