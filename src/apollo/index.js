import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  split
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
// import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import packageJson from "../../package.json";
import APP_FLOW_ACTIONS, { CONFIG } from "../constants";
// import CONFIG from '../Config';
import auth from "../helper/auth";
import emitter from "../helper/eventEmitter";
// import ApolloClient from "apollo-boost";

const { APOLLO_HOST_URL } = CONFIG;

const isLocal = APOLLO_HOST_URL.includes("localhost") ? "" : "s";

const httpLink = new HttpLink({
  uri: `http${isLocal}://${APOLLO_HOST_URL}`,
  credentials: "same-origin",
});

// const wsLink = new WebSocketLink({
//   uri: `ws${isLocal}://${APOLLO_HOST_URL}`,
//   options: {
//     reconnect: true,
//   },
// });

const terminatingLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  httpLink
);

const link = ApolloLink.from([terminatingLink]);

const cache = new InMemoryCache({ addTypename: false });

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const createClient = async (
  isUsingCache = false,
  isNotShowDisconnect = false
) => {
  try {
    const token = auth.getToken();
    // console.log({ token });
    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        "access-token": token,
        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET',
        // 'Access-Control-Allow-Headers': 'application/json',
      },
    }));
    return new ApolloClient({
      link: authLink.concat(
        ApolloLink.from([
          onError(
            ({ graphQLErrors, networkError, response, operation, forward }) => {
              if (graphQLErrors) {
                graphQLErrors.map(({ message, extensions }) => {
                  console.log({ errMes: message });
                  if (
                    message.includes("400") ||
                    message.includes("403") ||
                    message.includes("404") ||
                    extensions.code === "UNAUTHENTICATED"
                  ) {
                    emitter.emit(APP_FLOW_ACTIONS.LOGOUT_REQUEST);
                  }
                });
              } else if (networkError) {
                console.error(`[Network error]: ${networkError}`);
                // if (!isNotShowDisconnect) {
                // openPopupDisconnect();
                // }
                throw networkError;
              }
            }
          ),
          httpLink,
        ])
      ),
      cache,
      defaultOptions: isUsingCache ? undefined : defaultOptions,
      name: "web",
      version: packageJson.version,
    });
  } catch (error) {
    throw error;
  }
};

// headers: {
//   'Access-Control-Allow-Credentials': true,
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET',
//   'Access-Control-Allow-Headers': 'application/json',
//   'allowedHeaders': ['sessionId', 'Content-Type'],
//   'exposedHeaders': ['sessionId'],
//   'origin': '*',
//   'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   'preflightContinue': false,
//   'Apollo-Require-Preflight': 'true',
//   "Content-Type": "application/json",
//   Accept: 'application/json',
// }

export const client = new ApolloClient({
  link,
  cache,
  credentials: "same-origin", //include, same-origin
  defaultOptions,
  fetchOptions: {
    mode: 'no-cors',
  },
  // method: 'POST', // *GET, POST, PUT, DELETE, etc.
  // mode: 'no-cors', // no-cors, *cors, same-origin
  // headers: {
  //   "Content-Type": "application/json",
  // },
  // redirect: 'follow', // manual, *follow, error
  // referrerPolicy: 'same-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
});


// export const client = new ApolloClient({
//   uri: "http://localhost:8080/graphql",
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Credentials': true,
//   },
// });

export default createClient;