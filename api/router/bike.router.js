'use strict';

const { Router } = require('express');

const BikeController = require('../controllers/bike.controller');
const BileValidator = require('../validators/bike.validators');
const userRouter = Router();

userRouter.get('/', BikeController.getBike);
userRouter.post('/', BileValidator.validateBike, BikeController.addBike);
userRouter.patch('/', BileValidator.validateID, BikeController.changeBike);
userRouter.delete('/', BileValidator.validateID, BikeController.deleteBike);

module.exports = userRouter;
