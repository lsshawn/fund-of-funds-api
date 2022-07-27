const UserQuery = require("./entities/user/query");
const CustomerQuery = require("./entities/customer/query");
const AssetQuery = require("./entities/asset/query");
const TradeQuery = require("./entities/trade/query");
const PositionQuery = require("./entities/position/query");

const CustomerMutation = require("./entities/customer/mutation");
const AssetMutation = require("./entities/asset/mutation");
const TradeMutation = require("./entities/trade/mutation");

exports.Mutation = {
  ...CustomerMutation,
  ...AssetMutation,
  ...TradeMutation
}

exports.Query = {
  ...UserQuery,
  ...CustomerQuery,
  ...AssetQuery,
  ...TradeQuery,
  ...PositionQuery
};
