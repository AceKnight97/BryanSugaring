import ApolloClient from "apollo-boost";
import APP_FLOW_ACTIONS, { CONFIG } from '../constants';
import auth from '../helper/auth';
import emitter from "../helper/eventEmitter";

const { APOLLO_HOST_URL } = CONFIG;

const client = new ApolloClient({
    uri: APOLLO_HOST_URL,
    fetchOptions: {
        credentials: 'include'
    },
    request: async (operation) => {
        const token = auth.getToken();
        operation.setContext({
            headers: {
                "access-token": token,
            }
        });
    },
    onError: ({ graphQLErrors, networkError }) => {
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
            throw networkError;
        }
        // if (graphQLErrors) {
        //     console.error(`[graphQLErrors]: ${graphQLErrors}`);
        // }
        // if (networkError) {
        //     console.error(`[Network error]: ${networkError}`);
        // }
        // throw graphQLErrors || networkError;
    },
    clientState: {
        defaults: {
            isConnected: true
        },
        resolvers: {
            Mutation: {
                updateNetworkStatus: (_, { isConnected }, { cache }) => {
                    cache.writeData({ data: { isConnected } });
                    return null;
                }
            }
        }
    },
    cacheRedirects: {
        Query: {
            movie: (_, { id }, { getCacheKey }) =>
                getCacheKey({ __typename: 'Movie', id })
        }
    }
});

export const signInClient = new ApolloClient({
    uri: APOLLO_HOST_URL,
});


export default client;