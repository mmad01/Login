🔐 React Login Form (TypeScript + JSON Server)

A simple login form built with React and TypeScript, using JSON Server as a mock backend for authentication.

This project demonstrates basic client-side authentication logic and API interaction with a local JSON database.

✨ Features

Login form built with React + TypeScript

Mock authentication using JSON Server

Credentials loaded from a local JSON file

Simple and clear project structure

Easy to run and customize

🧰 Tech Stack

React

TypeScript

JSON Server

npm

📁 Project Structure
.
├── database
│   └── db.json
├── src
│   ├── components
│   ├── pages
│   ├── App.tsx
│   └── main.tsx
└── README.md

⚙️ Prerequisites

Make sure you have the following installed:

Node.js (v16 or higher recommended)

npm

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install dependencies
npm install

3️⃣ Run JSON Server

JSON Server must run on port 3000.

npx json-server --watch ./database/db.json --port 3000


The JSON database file is located at:

./database/db.json

4️⃣ Start the React app
npm start

🔑 Authentication Logic

User credentials are fetched from JSON Server

Login validation is handled on the client side

JSON Server simulates a backend API

⚠️ This project is intended for learning and demonstration purposes only.
Do not use this authentication approach in production environments.

📌 Notes

JSON Server must be running before submitting the login form

Default API base URL: http://localhost:3000

Can be easily connected to a real backend later

📄 License

This project is open-source and free to use for educational purposes.
