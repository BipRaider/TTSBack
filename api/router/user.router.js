'use strict';

const { Router } = require('express');

const UserController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.get('/', UserController.getUser);

module.exports = userRouter;
