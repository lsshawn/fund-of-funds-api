const { gql } = require("apollo-server-lambda");

const Customer = gql`
  extend type Query {
    customerGet(_id: ID!): Customer
    customerGetMany(page: Int, limit: Int): [Customer]
    customerAutocomplete(firstName: String!): [Customer]
  }
  
  extend type Mutation {
    customerCreate(obj: GraphQLJSON): Customer
    customerUpdate(obj: GraphQLJSON): Customer
  }

  type Customer {
    _id: ID!
    firstName: String
    lastName: String
    createdDate: GraphQLDate
    updatedDate: GraphQLDate
    email: String
    deposit: Int
  }
`;

module.exports = Customer;
