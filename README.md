# 🚀 AGraphQL Book App – Frontend Integration Workshop

Welcome to the **GraphQL Book App – Frontend Integration Workshop**! 🎉  
In this workshop, you'll learn how to:  
✅ Connect a **React frontend** to an **Apollo Server backend**  
✅ Fetch book data from a **GraphQL API** using **Apollo Client**  
✅ Use GraphQL **queries & mutations** to interact with the backend
## 📌 Prerequisites
Before running this example, make sure you have:
- **Node.js 18+** installed → [Download Here](https://nodejs.org/)
- **npm** (comes with Node.js)
- - The **Book Backend API** running (see GrahphQLBook setup instructions below)

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
2. Install Dependencies for the backend and start the Apollo Server
```bash
cd backend
npm install
node index.js
```
After running this, you should see:
```bash
🚀 Server ready at http://localhost:4000/
```
3.  Install Dependencies for the Frontend  (React + Apollo Client)
```bash
cd front-end
npm install #This installs React, Apollo Client, and GraphQL dependencies.
npm start 
```
✅ The frontend should now open in your browser at:
```bash
🚀 frontEnd ready at http://localhost:3000/
```
## 🛠 Project Structure
```bash
📂 graphql-book-app
├── 📂 backend               # GraphQL API (Apollo Server)
│   ├── 📄 package.json      # Backend dependencies
│   ├── 📄 index.js          # Main Apollo Server file
│   ├── 📂 data              # (Optional) Store mock database files
├── 📂 frontend              # React app (Apollo Client)
│   ├── 📂 src               # React components & logic
│   │   ├── 📄 App.js        # Main React component
│   │   ├── 📄 index.js      # Entry point, wraps with ApolloProvider
│   │   ├── 📄 ApolloClient.js  # Apollo Client configuration
│   ├── 📄 package.json      # Frontend dependencies
│   ├── 📂 public            # Static assets
├── 📄 README.md             # Documentation
└── 📄 .gitignore            # Git ignore file

```
## 🎯 Next Steps
Want to extend this example? Try adding:
* ✅ a deleteBook mutation
* ✅ Improve UI with Material UI or Tailwind CSS
--------------------
## 💡 About This Workshop
This workshop is part of a series of GraphQL workshops developed by [Badia Bouhdid](https://tn.linkedin.com/in/badiabouhdid). If you enjoyed this session, stay tuned for more workshops on advanced GraphQL concepts, Apollo Client, authentication, and more! 🚀
