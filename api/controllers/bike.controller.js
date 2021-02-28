'use strict';

const { addBike, getBikes, changeHireBike, deleteBike } = require('../helpers');

module.exports = class BikeController {
   static async getBike(req, res, next) {
      try {
         const listBikes = await getBikes();

         return res.status(200).json(listBikes);
      } catch (error) {
         next(error);
      }
   }
   static async addBike(req, res, next) {
      try {
         const bike = await addBike(req.body);
         return res.status(201).json(bike);
      } catch (error) {
         next(error);
      }
   }

   static async changeBike(req, res, next) {
      try {
         const bike = await changeHireBike(req.body);
         return res.status(201).json(bike);
      } catch (error) {
         next(error);
      }
   }

   static async deleteBike(req, res, next) {
      try {
         await deleteBike(req.body);

         return res.status(201).end();
      } catch (error) {
         next(error);
      }
   }
};
