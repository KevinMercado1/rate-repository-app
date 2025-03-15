/* eslint-disable @typescript-eslint/explicit-function-return-type */
require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const { typeDefs, resolvers } = require('./schema');

async function startServer() {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(
      `🚀 Server GraphQL Running in http://localhost:${PORT}/graphql`
    );
  });
}

startServer();
