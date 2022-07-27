const UserQuery = require("./entities/user/query");
const CustomerQuery = require("./entities/customer/query");
const FundQuery = require("./entities/fund/query");
const TradeQuery = require("./entities/trade/query");
const PositionQuery = require("./entities/position/query");

const CustomerMutation = require("./entities/customer/mutation");
const FundMutation = require("./entities/fund/mutation");
const TradeMutation = require("./entities/trade/mutation");

exports.Mutation = {
  ...CustomerMutation,
  ...FundMutation,
  ...TradeMutation
}

exports.Query = {
  ...UserQuery,
  ...CustomerQuery,
  ...FundQuery,
  ...TradeQuery,
  ...PositionQuery
};
