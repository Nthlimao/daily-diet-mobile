import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache, ApolloLink, HttpLink } from "apollo-boost";

const httpLink = new HttpLink({ uri: 'https://daily-diet-node.herokuapp.com' });

const authLink = new ApolloLink((operation, forward) => {
    const token = "";
  
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  
    return forward(operation);
  });

  
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;