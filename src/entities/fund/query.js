const { connectToDatabase } = require('../../helpers/utils')
const { getOne, getMany } = require('../../helpers/queries')

const Fund = require("./model");

module.exports.fundGet = async (parent, args, context, info) => {
  const query = { _id: args._id }
  return await getOne(Fund, query, context)
};


module.exports.fundGetMany = async (model, args, context) => {
  return await getMany(Fund, args, context)
};

module.exports.fundAutocomplete = async (parent, args, context, info) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDatabase();

  try {
    const funds = await Fund.find({
      ticker: { $regex: new RegExp(args.ticker, "i") },
    }).limit(10);
    return funds;
  } catch (err) {
    throw new Error(err);
  }
};
