'use strick';

const bikeModel = require('../models/bike.model');
const prepareBikesResponse = require('./prepareBikesResponse');

module.exports = async ({ hire }) => {
   try {
      const listBikes = await bikeModel.findData('hire', hire);

      return prepareBikesResponse(listBikes);
   } catch (error) {
      throw error;
   }
};
