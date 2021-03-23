'use strick';

const bikeModel = require('../model/bike.model');
const { prepareBikesResponse } = require('../helpers');

module.exports = async ({ hire }) => {
   try {
      const listBikes = await bikeModel.findData('hire', hire);

      return prepareBikesResponse(listBikes);
   } catch (error) {
      throw error;
   }
};
