# 📚 Apollo GraphQL Book API Example

Welcome to the **Book GraphQL API Example**! This project demonstrates how to:  
✅ Define a **GraphQL schema** with queries & mutations  
✅ Implement a **GraphQL API** using **Apollo Server**  
✅ Fetch and modify book data
## 📌 Prerequisites
Before running this example, make sure you have:
- **Node.js 18+** installed → [Download Here](https://nodejs.org/)
- **npm** (comes with Node.js)

Verify installation by running:
```bash
node -v    # Should return v18.x or later
npm -v     # Should return a version number
```
## ⚡ Setup & Run Instructions
1. Clone the Repository
```bash
   git clone <YOUR_REPO_URL>
   cd <REPO_FOLDER_NAME>
```
2. Install Dependencies
```bash
npm install
```
3. Start the Apollo Server
```bash
node index.js
```
After running this, you should see:
```bash
🚀 Server ready at http://localhost:4000/
```
## 🔎 Testing the GraphQL API
1. Open Apollo Studio Sandbox or Postman
2. Enter your GraphQL API URL: http://localhost:4000/
Run the following query:
```bash
  query {
  books {
    id
    title
    author
    year
  }
}
```
✅Expected Response:
```bash
{
  "data": {
    "books": [
      { "id": "1", "title": "Dune", "author": "Frank Herbert", "year": 1965 },
      { "id": "2", "title": "1984", "author": "George Orwell", "year": 1949 }
    ]
  }
}
```
3. Add a New Book (Mutation)
Run this GraphQL mutation:
```bash
 mutation {
  addBook(title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937) {
    id
    title
    author
    year
  }
}
```
✅Expected Response:
```bash
{
  "data": {
    "addBook": {
      "id": "3",
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "year": 1937
    }
  }
}

```
## 🛠 Project Structure
```bash
📂 graphql-starter-project
├── 📂 backend               # Backend (GraphQL API)
│   ├── 📄 package.json      # Backend dependencies
│   ├── 📄 index.js          # Main Apollo Server file
│   ├── 📂 node_modules      # Installed backend dependencies
├── 📄 README.md  
```
## 🎯 Next Steps
🎯 Next Steps
Want to extend this example? Try adding:
* ✅ A query to get a book by ID
* * ✅ A query to get  books by author
* ✅ A mutation to update or delete a book
--------------------
## 💡 About This Workshop
This workshop is part of a series of GraphQL workshops developed by [Badia Bouhdid](https://tn.linkedin.com/in/badiabouhdid). If you enjoyed this session, stay tuned for more workshops on advanced GraphQL concepts, Apollo Client, authentication, and more! 🚀
