import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({ 
        uri: process.env.API_GRAPHQL
    }),
});

export default client;