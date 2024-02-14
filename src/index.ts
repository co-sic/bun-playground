import express from 'express';
import http from 'http';
import {expressMiddleware} from "@apollo/server/express4";
import {ApolloServer} from "@apollo/server";
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import {createContext, schema} from "./apollo";


(async () => {
    const app = express();
    const port = '4500';
    app.set('port',port);
    app.use(express.json());

    const httpServer = http.createServer(app);
    const apolloServer = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await apolloServer.start();

    app.use('/graphql', expressMiddleware(apolloServer, { context: createContext }));
    httpServer.listen({ port });
})();