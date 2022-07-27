const Fund = require("./model");
const {
  createOne,
  updateOne
} = require("../../helpers/queries");

module.exports.fundCreate = async (parent, args, context, info) => {
  return await createOne(Fund, args, context);
};

module.exports.fundUpdate = async (parent, args, context, info) => {
  return await updateOne(Fund, args, context);
};

