'use strict';

module.exports = class UserController {
   static async getUser(req, res, next) {
      try {
         return res.status(200).json({ sss: 'ssss' });
      } catch (error) {
         next(error);
      }
   }
};
