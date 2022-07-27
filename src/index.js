const { ApolloServer } = require("apollo-server-lambda");
const { Query, Mutation } = require("./resolvers");
const typeDefs = require("./typedefs");

const resolvers = {
  Query,
  Mutation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => {
    return {
      headers: event.headers,
      functionName: event.functionName,
      event,
      context,
    };
  },
  playground: {
    endpoint: process.env.ENDPOINT,
  },
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    methods: "POST",
    allowHeaders: ["Content-Type", "Origin", "Accept"],
  },
});
