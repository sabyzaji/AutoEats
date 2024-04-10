const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user');
userRouter.use(express.json());
// const authHandler = require('../middlewares/authHandler.middleware')

userRouter.post('/create', userController.createOrder);
userRouter.post('/fetch-item', userController.fetchItem);
userRouter.post('/sign-up', userController.createUser);
userRouter.post('/login', userController.userLogin);
userRouter.post('/')

module.exports = userRouter