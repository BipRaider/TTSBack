'use strick';

const bikeModel = require('../models/bike.model');
const prepareBikesResponse = require('./prepareBikesResponse');

module.exports = async () => {
   try {
      const listBikes = await bikeModel.getBikes();

      return prepareBikesResponse(listBikes);
   } catch (error) {
      throw error;
   }
};
