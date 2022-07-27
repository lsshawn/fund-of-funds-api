const { gql } = require("apollo-server-lambda");

const Trade = gql`
  extend type Query {
    tradeGet(_id: ID!): Trade
    tradeGetMany(page: Int, limit: Int): [Trade]
  }
  
  extend type Mutation {
    tradeCreate(obj: GraphQLJSON): Trade
    tradeUpdate(obj: GraphQLJSON): Trade
    tradeDelete(_id: ID!): Trade
  }

  type Trade {
    _id: ID!
    tradeType: String
    currency: String
    quantity: Float
    price: Float
    value: Float
    fund: GraphQLJSON
    createdBy: GraphQLJSON
    customer: GraphQLJSON
    createdDate: GraphQLDate
    tradeDate: GraphQLDate
  }
`;

module.exports = Trade;
