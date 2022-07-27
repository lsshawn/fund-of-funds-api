const { gql } = require("apollo-server-lambda");

const Position = gql`
  extend type Query {
    positionGetManyByCustomer(customer: ID!): [Position]
  }

  # No mutation. All positions needs to be changed in server

  type Position {
    _id: ID!
    currency: String
    quantity: Float
    lastPrice: Float
    createdDate: GraphQLDate
    lastUpdatedDate: GraphQLDate
    ticker: GraphQLJSON
    customer: GraphQLJSON
  }
`;

module.exports = Position;
