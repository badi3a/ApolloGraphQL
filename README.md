# 🚀 Apollo GraphQL Starter Example

Welcome to the **Apollo GraphQL "Hello" Example**! This simple project demonstrates how to set up a **GraphQL API** using **Apollo Server** in Node.js.

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
   hello
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
## 🎯 Next Steps: your TODO
Want to extend this example? Try adding:
* ✅ a new query sayHello(name: String!) that returns a personalized greeting.
--------------------
## 💡 About This Workshop
This workshop is part of a series of GraphQL workshops developed by [Badia Bouhdid](https://tn.linkedin.com/in/badiabouhdid). If you enjoyed this session, stay tuned for more workshops on advanced GraphQL concepts, Apollo Client, authentication, and more! 🚀
