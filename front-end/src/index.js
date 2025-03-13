import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from React 18
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient"; // Import Apollo Client
import App from "./App";

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a root and render the app inside ApolloProvider
const root = ReactDOM.createRoot(rootElement);
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
