const { connectToDatabase } = require('../../helpers/utils')
const { getOne, getMany } = require('../../helpers/queries')

const Asset = require("./model");

module.exports.assetGet = async (parent, args, context, info) => {
  const query = { _id: args._id }
  return await getOne(Asset, query, context)
};

module.exports.assetGetMany = async (model, args, context) => {
  return await getMany(Asset, args, context)
};

module.exports.assetGetManyFunds = async (model, args, context) => {
  args.filters = {
    type: 'fund'
  }
  return await getMany(Asset, args, context)
};

module.exports.assetAutocomplete = async (parent, args, context, info) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDatabase();

  let query = {
    ticker: { $regex: new RegExp(args.ticker, "i") }
  }
  if (args.type) query.type = args.type

  try {
    const assets = await Asset.find(query).limit(10)
    return assets;
  } catch (err) {
    throw new Error(err);
  }
};
