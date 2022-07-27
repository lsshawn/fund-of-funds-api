const { getOne, getMany } = require('../../helpers/queries')

const Trade = require("./model");

module.exports.tradeGet = async (parent, args, context, info) => {
  const query = { _id: args._id }
  return await getOne(Trade, query, context)
};


module.exports.tradeGetMany = async (model, args, context) => {
  return await getMany(Trade, args, context)
};
