import {buildSubgraphSchema} from "@apollo/subgraph";
import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    hello: String!
  }
  `;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
}

export const schema = buildSubgraphSchema({
    typeDefs,
    resolvers,
});

export interface Context {}

export function createContext(): Promise<Context> {
    return Promise.resolve({});
}

