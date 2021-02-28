'use strict';

const Joi = require('joi');

const { checkedId } = require('../helpers');

module.exports = class ValidatorBike {
   static validateBike(req, res, next) {
      const validationRules = Joi.object({
         name: Joi.string().required(),
         typeBike: Joi.string().required(),
         rent: Joi.number().required(),
      });

      const val = validationRules.validate(req.body);

      if (val.error) {
         const err = new Error('Invalid request body');
         err.code = 404;
         throw err;
      }
      next();
   }

   static validateID(req, res, next) {
      const { id } = req.body;
      checkedId(id);
      next();
   }
};
