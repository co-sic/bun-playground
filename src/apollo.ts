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
  Query: {
    offers: () => [
      {
        id: "1",
        type: OfferType.EXISTING_CUSTOMER_OFFER,
        customer: { id: "1" },
      },
      { id: "2", type: OfferType.NEW_CUSTOMER_OFFER, customer: { id: "2" } },
      {
        id: "3",
        type: OfferType.ADDITIONAL_SERVICE_OFFER,
        customer: { id: "3" },
      },
    ],
  },
  Offer: {
    __resolveType: (offer: Offer) => {
      if (offer.type === OfferType.EXISTING_CUSTOMER_OFFER) {
        return "ExistingCustomerOffer";
      }
      if (offer.type === OfferType.NEW_CUSTOMER_OFFER) {
        return "NewCustomerOffer";
      }
      if (offer.type === OfferType.ADDITIONAL_SERVICE_OFFER) {
        return "AdditionalServiceOffer";
      }
      throw new Error(`Unknown offer type: ${offer.type}`);
    },
  },
  AdditionalServiceOffer: {
    customer: (offer: Offer) => ({
      id: offer.customer.id,
      customerNumber: "100",
      companyName: "Test",
    }),
  },
  ExistingCustomerOffer: {
    customer: (offer: Offer) => ({
      id: offer.customer.id,
      customerNumber: "100",
      companyName: "Test Customer",
    }),
  },
  NewCustomerOffer: {
    lead: (offer: Offer) => ({
      id: offer.customer.id,
      companyName: "Test Lead",
    }),
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
