const { gql } = require("apollo-server-lambda");

const Fund = gql`
  extend type Query {
    fundGet(_id: ID!): Fund
    fundGetMany(page: Int, limit: Int): [Fund]
    fundAutocomplete(ticker: String!): [Fund]
  }
  
  extend type Mutation {
    fundCreate(obj: GraphQLJSON): Fund
    fundUpdate(obj: GraphQLJSON): Fund
  }

  type Fund {
    _id: ID!
    ticker: String!
    name: String
    description: String
    manager: String
    createdDate: GraphQLDate
    createdBy: User
    updatedDate: GraphQLDate
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

module.exports = Fund;
