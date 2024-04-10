
const express = require('express')
const adminRouter = express.Router()
const adminController = require('../controllers/admin');
adminRouter.use(express.json());

adminRouter.post('/add-item', adminController.createItem);
adminRouter.post('/customer-details', adminController.fetchCustomers);
adminRouter.post('/fetch-orders-customer', adminController.fetchOrdersWithId)
adminRouter.post('/change-availability', adminController.changeAvailability)
adminRouter.post('/customer-detail-by-id', adminController.fetchCustomersById)



module.exports = adminRouter


