
import { ApolloClient, InMemoryCache } from '@apollo/client/core';  
import { createHttpLink } from '@apollo/client/link/http'

import { setContext } from "@apollo/client/link/context";
import createUploadLink from "./apolloUploadClient/createUploadLink.mjs";

const URI = import.meta.env.PUBLIC_GQL_ENDPOINT;

console.log(URI)

const httpLink = createHttpLink({
  uri: `${URI}`,
});



const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.PUBLIC_DEV_API_TOKEN;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "", 
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only",
      pollInterval: 1000,
    },
    query: {
      fetchPolicy: "network-only",
    },
  },
});

// Create the Apollo Client without the authenticated HTTP link
export const clientWithoutAuth = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only",
      pollInterval: 1000,
    },
    query: {
      fetchPolicy: "network-only",
    },
  },
});

// Create the Apollo Client without the authLink
export const clientWithUpload = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only",
      pollInterval: 1000,
    },
    query: {
      fetchPolicy: "network-only",
    },
  },
});