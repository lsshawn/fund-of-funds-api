const mongoose = require("mongoose");
const User = require('../user/model')

const AssetSchema = new mongoose.Schema({
  ticker: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    enum: ['fund', 'cash'],
    default: 'fund'
  },
  name: String,
  createdDate: {
    type: Date,
    default: Date.now()
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  baseCurrency: {
    type: String,
    enum: ['USD', 'BTC', 'ETH', 'EUR', 'MYR'],
    default: 'USD'
  },
  updatedDate: Date,
  description: String,
  // TODO: update from price feed
  lastPrice: Number,
  // fund
  manager: String,
  inceptionDate: Date,
  managementFee: Number,
  performanceFee: Number,
  minInvestment: Number,
  minAdditionalInvestment: Number,
  investedAmount: Number,
  maxInvestableAmount: Number,
});

function populate(next) {
  this.populate({
    path: "createdBy",
    select: {
      _id: 1,
      firstName: 1,
    },
  });

  next();
}

AssetSchema.pre("find", populate);
AssetSchema.pre("findOne", populate);

module.exports =
  mongoose.models.Asset || mongoose.model("Asset", AssetSchema);
