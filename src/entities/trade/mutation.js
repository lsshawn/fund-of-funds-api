const Trade = require("./model");
const Position = require("../position/model");
const {
  createOne,
  updateOne
} = require("../../helpers/queries");

module.exports.tradeCreate = async (parent, args, context, info) => {
  // validate

  const trade = args.obj
  const type = trade.tradeType
  const value = trade.price * trade.quantity

  // Buy: check if user has enough money
  if (type === 'buy') {
    // const customer = await Customer.findById(trade.customer).select('')
  }
  // Sell: check if user has open position

  const tradeDocument = await createOne(Trade, args, context);

  // side effects
  if (type === 'deposit') {
  }

  // Deposit: increase user deposit & position
  // Withdraw: decrease user deposit & position

};

module.exports.tradeUpdate = async (parent, args, context, info) => {
  // TODO: If we're going to allow tradeUpdate, then we need the same logic like tradeCreate
  return await updateOne(Trade, args, context);
};


module.exports.tradeDelete = async (parent, args, context, info) => {
  return await deleteOne(Trade, args, context);
};
