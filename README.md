# 📌 Number Classification API

This API classifies a number by checking if it is prime, an Armstrong number, and more. It also fetches a fun math fact.

## 🚀 Live Demo
[API URL](https://your-deployed-url.com/api/classify-number?number=371)

## 🛠 Technologies Used
- Node.js
- TypeScript
- Express
- Axios
- Render for deployment

## 📌 Endpoints
### `GET /api/classify-number?number=371`
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
