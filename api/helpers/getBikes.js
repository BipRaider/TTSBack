'use strick';

const bikeModel = require('../models/bike.model');

const listBikes = bakes => {
   return bakes.map(({ name, time, rent, typeBike, _id, hire }) => {
      return {
         name,
         time,
         rent,
         typeBike,
         hire,
         id: _id,
      };
   });
};

module.exports = async () => {
   try {
      const bikes = await bikeModel.getBikes();

      return listBikes(bikes);
   } catch (error) {
      throw error;
   }
};
