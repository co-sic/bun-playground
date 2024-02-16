import { buildSubgraphSchema } from "@apollo/subgraph";
import gql from "graphql-tag";
import * as fs from "fs";

const typeDefs = gql`
  ${fs.readFileSync("./schema.graphql", "utf8")}
`;

enum OfferType {
  EXISTING_CUSTOMER_OFFER = "EXISTING_CUSTOMER_OFFER",
  NEW_CUSTOMER_OFFER = "NEW_CUSTOMER_OFFER",
  ADDITIONAL_SERVICE_OFFER = "ADDITIONAL_SERVICE_OFFER",
}

interface Offer {
  id: string;
  type: OfferType;
  customer: { id: string };
}

const resolvers = {
  Mutation: {
    test: () => ({ success: true }),
  },
};

export const schema = buildSubgraphSchema({
  typeDefs,
  resolvers,
});

export interface Context {}

export function createContext(): Promise<Context> {
  return Promise.resolve({});
}
