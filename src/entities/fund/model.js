const mongoose = require("mongoose");
const User = require('../user/model')

const FundSchema = new mongoose.Schema({
  ticker: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  description: String,
  manager: String,
  createdDate: {
    type: Date,
    default: Date.now()
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  updatedDate: Date,
  inceptionDate: Date,
  baseCurrency: String,
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

FundSchema.pre("find", populate);
FundSchema.pre("findOne", populate);

module.exports =
  mongoose.models.Fund || mongoose.model("Fund", FundSchema);
