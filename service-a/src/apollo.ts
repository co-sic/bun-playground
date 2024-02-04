import {buildSubgraphSchema} from "@apollo/subgraph";
import gql from "graphql-tag";
import * as fs from "fs";

const typeDefs = gql`${fs.readFileSync('./schema.graphql', 'utf8')}`;

const resolvers = {
    Query: {
        organization: () => ({id: '1', customerNumber: '100', currentFeatureFlagProductIds: ['1', '2']}),
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

