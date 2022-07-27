const { getOne, getMany } = require('../../helpers/queries')

const Trade = require("./model");

module.exports.tradeGet = async (parent, args, context, info) => {
  const query = { _id: args._id }
  return await getOne(Trade, query, context)
};


module.exports.tradeGetMany = async (model, args, context) => {
  args.sort = { 'createdDate': -1 }
  return await getMany(Trade, args, context)
};

module.exports.tradeGetManyByAsset = async (model, args, context) => {
  args.filters = { asset: args.asset }
  args.sort = { 'createdDate': -1 }
  return await getMany(Trade, args, context)
};

module.exports.tradeGetManyByCustomer = async (model, args, context) => {
  args.filters = { customer: args.customer }
  args.sort = { 'createdDate': -1 }
  return await getMany(Trade, args, context)
};
