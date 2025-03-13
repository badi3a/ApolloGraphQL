// Import React and the useState hook for managing form input state
import React, { useState } from "react";

// Import gql to define GraphQL queries/mutations and useQuery, useMutation hooks from Apollo Client
import { gql, useQuery, useMutation } from "@apollo/client";

// 📌 Define the GraphQL query to fetch all books from the backend
const GET_BOOKS = gql`
    query {
        books {
            id
            title
            author
            year
        }
    }
`;

// 📌 Define the GraphQL mutation to add a new book
const ADD_BOOK = gql`
    mutation AddBook($title: String!, $author: String!, $year: Int!) {
        addBook(title: $title, author: $author, year: $year) {
            id
            title
            author
            year
        }
    }
`;

function App() {
    // 📌 Fetch books from the GraphQL API using useQuery
    const { loading, error, data } = useQuery(GET_BOOKS);

    // 📌 Set up the useMutation hook for adding books
    const [addBook] = useMutation(ADD_BOOK, {
        refetchQueries: [{ query: GET_BOOKS }], // Refresh the book list after adding a new book
    });

    // 📌 State variables for storing user input
    const [title, setTitle] = useState(""); // Store book title input
    const [author, setAuthor] = useState(""); // Store author input
    const [year, setYear] = useState(""); // Store year input

    // 📌 Show a loading message while the books are being fetched
    if (loading) return <p>Loading...</p>;

    // 📌 Show an error message if something goes wrong with the query
    if (error) return <p>Error: {error.message}</p>;

    // 📌 Function to handle the form submission when adding a new book
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        addBook({ variables: { title, author, year: parseInt(year) } }); // Call addBook mutation with user input
        setTitle(""); // Reset title field after submission
        setAuthor(""); // Reset author field after submission
        setYear(""); // Reset year field after submission
    };

    return (
        <div>
            {/* 📌 Display the list of books */}
            <h1>📚 Book List</h1>
            <ul>
                {data.books.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author} ({book.year})
                    </li>
                ))}
            </ul>

            {/* 📌 Form for adding a new book */}
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                {/* 📌 Input for book title */}
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                {/* 📌 Input for book author */}
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />

                {/* 📌 Input for book year */}
                <input
                    type="number"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                />

                {/* 📌 Button to submit the form */}
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

// 📌 Export the App component to be used in index.js
export default App;
