'use strict';

const { Router } = require('express');

const BikeController = require('../controllers/bike.controller');
const BileValidator = require('../validators/bike.validators');
const userRouter = Router();

userRouter.get('/', BikeController.getBike);

userRouter.get('/hire', BileValidator.validateBikesHire, BikeController.getListBikesHired);

userRouter.post('/add', BileValidator.validateBike, BikeController.addBike);
userRouter.patch('/change', BileValidator.validateID, BikeController.changeBike);
userRouter.delete('/delete', BileValidator.validateID, BikeController.deleteBike);

module.exports = userRouter;
