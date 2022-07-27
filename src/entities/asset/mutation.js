const Asset = require("./model");
const {
  createOne,
  updateOne
} = require("../../helpers/queries");

module.exports.assetCreate = async (parent, args, context, info) => {
  return await createOne(Asset, args, context);
};

module.exports.assetUpdate = async (parent, args, context, info) => {
  return await updateOne(Asset, args, context);
};

