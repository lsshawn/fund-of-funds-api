const Trade = require("./model");
const Position = require("../position/model");
const {
  createOne,
  updateOne
} = require("../../helpers/queries");

module.exports.tradeCreate = async (parent, args, context, info) => {
  const trade = args.obj
  const type = trade.tradeType

  // TODO: validate
  // Buy: check if user has enough money
  // Sell: check if user has open position

  const tradeDocument = await createOne(Trade, args, context);

  // update position
  const quantityWithSign = ['withdraw', 'sell'].includes(type) ? -trade.quantity : trade.quantity

  await Position.findOneAndUpdate(
    {
      asset: tradeDocument.asset,
      customer: tradeDocument.customer
    },
    {
      $inc: {
        "quantity": quantityWithSign,
      },
      $set: { updatedDate: Date.now() }
    },
    {
      upsert: true,
      new: true
    }
  )

  // Buy/Sell needs to affect deposit

  // reduce deposit if buy
  if (['buy', 'sell'].includes(type)) {
    // TODO: get from trade currency. We assume USD as base.
    const USD_ID = '62e110befc01706680fb6a67'

    const value = tradeDocument.quantity * tradeDocument.price
    const depositChange = type === 'buy' ? -value : value

    await Position.findOneAndUpdate(
      {
        asset: USD_ID,
        customer: tradeDocument.customer
      },
      {
        $inc: {
          "quantity": depositChange,
        },
        $set: { updatedDate: Date.now() }
      },
      {
        upsert: true,
        new: true
      }
    )
  }



};

module.exports.tradeUpdate = async (parent, args, context, info) => {
  // TODO: If we're going to allow tradeUpdate, then we need the same logic like tradeCreate
  return await updateOne(Trade, args, context);
};


module.exports.tradeDelete = async (parent, args, context, info) => {
  return await deleteOne(Trade, args, context);
};
