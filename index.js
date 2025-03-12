const { ApolloServer, gql } = require("apollo-server");

// Sample in-memory book database
let books = [
    { id: "1", title: "Dune", author: "Frank Herbert", year: 1965 },
    { id: "2", title: "1984", author: "George Orwell", year: 1949 },
];

// Define the GraphQL schema
const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
        year: Int!
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        addBook(title: String!, author: String!, year: Int!): Book
    }
`;

// Define the resolvers
const resolvers = {
    Query: {
        books: () => books,
    },
    Mutation: {
        addBook: (_, { title, author, year }) => {
            const newBook = { id: String(books.length + 1), title, author, year };
            books.push(newBook);
            return newBook;
        },
    },
};

// Create and start the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
