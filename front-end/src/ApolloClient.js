// Import necessary modules from Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Create an instance of ApolloClient
const client = new ApolloClient({
    // Define the URI of the GraphQL server (backend API endpoint)
    uri: "http://localhost:4000", // This should point to the running Apollo Server

    // Configure caching strategy to store query results
    cache: new InMemoryCache(), // Enables efficient state management & avoids redundant network requests
});

// Export the client instance to use it in the ApolloProvider
export default client;
