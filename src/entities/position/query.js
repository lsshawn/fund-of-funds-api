const { getOne, getMany } = require('../../helpers/queries')

const Position = require("./model");

module.exports.positionGetManyByCustomer = async (model, args, context) => {
  return await getMany(Position, args, context)
};
