const { getOne, getMany } = require('../../helpers/queries')

const Position = require("./model");

module.exports.positionGetManyByCustomer = async (model, args, context) => {
  args.filters = { customer: args.customer }
  return await getMany(Position, args, context)
};
