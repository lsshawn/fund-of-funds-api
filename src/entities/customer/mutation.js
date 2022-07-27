const Customer = require("./model");
const {
  createOne,
  updateOne
} = require("../../helpers/queries");

module.exports.customerCreate = async (parent, args, context, info) => {
  await createOne(Customer, args, context);
};

module.exports.customerUpdate = async (parent, args, context, info) => {
  return await updateOne(Customer, args, context);
};

