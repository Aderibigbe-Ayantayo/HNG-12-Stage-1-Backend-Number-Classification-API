# 📌 Number Classification API

## 🚀 Overview
The **Number Classification API** is a simple RESTful API that takes a number as input and returns its mathematical properties, such as:
- Whether it is **Prime**
- Whether it is **Perfect**
- Whether it is **Armstrong**
- Sum of its digits
- Fun fact about the number (using [Numbers API](http://numbersapi.com))

## 🚀 Live Demo
[API URL](https://hng-12-stage-1-backend-number.onrender.com/api/classify-number)

## 🛠 Technologies Used
Node.js - JavaScript runtime
Express.js - Web framework
TypeScript - Typed JavaScript
Axios - HTTP client for API calls
CORS - Middleware for cross-origin requests

## 📌 Endpoints
### `GET /api/classify-number`

#### ✅ Success Response (200)
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}

📌 Error Response Example (400 Bad Request)
  {
  "number": "invalid",
  "error": true
  }


🛠️ Features
✔️ Accepts GET requests with a number parameter
✔️ Returns JSON response with mathematical properties
✔️ Fetches fun fact from Numbers API
✔️ Deployed to a public server
✔️ Handles CORS for cross-origin requests

🔧 Installation & Setup
To run the project locally, follow these steps:

1️⃣ Clone the Repository

git clone https://github.com/your-username/HNG-12-Stage-1-Backend-Number-Classification-API.git
cd HNG-12-Stage-1-Backend-Number-Classification-API
2️⃣ Install Dependencies
npm install


3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add:
PORT=3000

4️⃣ Run the Server
For development mode:
npm run dev

For production mode:
npm start

📂 Folder Structure
 📦 HNG-12-Stage-1-Backend-Number-Classification-API
 ┣ 📂 src
 ┃ ┣ 📜 index.ts
 ┃ ┣ 📜 utils.ts (optional)
 ┃ ┣ 📜 controllers.ts (optional)
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┣ 📜 README.md
 ┣ 📜 .env

✅ Deployment
 The API is deployed on Render
  -git push origin main

🛠️ Contributing
    Want to improve this project? Follow these steps:

    Fork the repository
    Create a new branch (git checkout -b feature-new)
    Make changes and commit (git commit -m "Added new feature")
    Push to GitHub (git push origin feature-new)
    Create a pull request

📝 License
This project is MIT licensed. Feel free to use and modify it.

📧 Contact
For questions or issues, reach out to:
📩 Email: adex.fadeel1989@gmail.com
🐙 GitHub: Aderibigbe-Ayantayo