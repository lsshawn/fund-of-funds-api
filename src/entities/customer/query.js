const { connectToDatabase } = require('../../helpers/utils')
const { getOne, getMany } = require('../../helpers/queries')

const Customer = require("./model");

module.exports.customerGet = async (parent, args, context, info) => {
  const query = { _id: args._id }
  return await getOne(Customer, query, context)
};


module.exports.customerGetMany = async (model, args, context) => {
  return await getMany(Customer, args, context)
};

module.exports.customerAutocomplete = async (parent, args, context, info) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectToDatabase();

  try {
    const customers = await Customer.find({
      firstName: { $regex: new RegExp(args.firstName, "i") },
    }).limit(10);
    return customers;
  } catch (err) {
    throw new Error(err);
  }
};
