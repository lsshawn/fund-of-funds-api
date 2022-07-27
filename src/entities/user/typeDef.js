const { gql } = require("apollo-server-lambda");

const User = gql`
  extend type Query {
    userGet(_id: ID!): User
  }

  type User {
    _id: ID!
    firstName: String 
    lastName: String 
    email: String
  }
`;

module.exports = User;
