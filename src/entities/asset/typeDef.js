const { gql } = require("apollo-server-lambda");

const Asset = gql`
  extend type Query {
    assetGet(_id: ID!): Asset
    assetGetMany(page: Int, limit: Int): [Asset]
    fundGetMany(page: Int, limit: Int): [Asset]
    assetAutocomplete(ticker: String!, type: String): [Asset]
  }
  
  extend type Mutation {
    assetCreate(obj: GraphQLJSON): Asset
    assetUpdate(obj: GraphQLJSON): Asset
  }

  type Asset {
    _id: ID!
    ticker: String!
    type: String
    name: String
    createdDate: GraphQLDate
    createdBy: User
    baseCurrency: String
    updatedDate: GraphQLDate
    description: String
    # fund
    manager: String
    inceptionDate: GraphQLDate
    baseCurrency: String
    managementFee: Float
    performanceFee: Float
    minInvestment: Float
    minAdditionalInvestment: Float
    investedAmount: Float
    maxInvestableAmount: Float
  }
`;

module.exports = Asset;
