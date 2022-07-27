const User = require("./entities/user/typeDef.js");
const Customer = require("./entities/customer/typeDef.js");
const Asset = require("./entities/asset/typeDef.js");
const Trade = require("./entities/trade/typeDef.js");
const Position = require("./entities/position/typeDef.js");

const { gql } = require("apollo-server-lambda");
const { GraphQLDate } = require("graphql-iso-date");
const { GraphQLJSON } = require("graphql-type-json");

const Query = gql`
  scalar GraphQLDate
  scalar GraphQLJSON

  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const schemaArray = [
  Query,
  Mutation,
  User,
  Customer,
  Asset,
  Trade,
  Position
];

module.exports = schemaArray;
