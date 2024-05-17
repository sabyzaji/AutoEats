const express = require('express')
const adminRouter = express.Router()
const adminController = require('../controllers/admin');
adminRouter.use(express.json());

adminRouter.post('/add-item', adminController.createItem);
adminRouter.post('/customer-details', adminController.fetchCustomers);
adminRouter.post('/fetch-orders-customer', adminController.fetchOrdersWithId);
adminRouter.post('/change-availability', adminController.changeAvailability);
adminRouter.post('/customer-detail-by-id', adminController.fetchCustomersById);
adminRouter.post('/order-display', adminController.getOrdersListToDisplay);
adminRouter.post('/table-count', adminController.countTablesUsedFrequently);
adminRouter.post('/daily-order-revenue', adminController.getDailyOrdersAndRevenue);
adminRouter.post('/staff-orders-list', adminController.staffOrderList);



module.exports = adminRouter


