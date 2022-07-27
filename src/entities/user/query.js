const User = require("./model");

const { getOne } = require('../../helpers/queries')

module.exports.userGet = async (parent, args, context, info) => {
  const query = { _id: args._id }
  return await getOne(User, query, context)
};

