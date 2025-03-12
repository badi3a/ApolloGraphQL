// Import ApolloServer and gql from the apollo-server package
const { ApolloServer, gql } = require("apollo-server");

// Define the GraphQL schema using the gql template literal
const typeDefs = gql`
    # Define a Query type with a single field 'hello' that returns a String
    type Query {
        hello: String
    }
`;

// Define the resolvers, which specify how to return data for the schema fields
const resolvers = {
    Query: {
        // The 'hello' query returns a simple "Hello, GraphQL!" string when requested
        hello: () => "Hello, GraphQL!",
    },
};

// Create an instance of ApolloServer and pass in the schema and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Start the Apollo Server and listen on a default port (usually 4000)
//IF you want to change the port server.listen({ port: 5000 })
server.listen().then(({ url }) => {
    // Log the server URL when it successfully starts
    console.log(`🚀 Server ready at ${url}`);
});
