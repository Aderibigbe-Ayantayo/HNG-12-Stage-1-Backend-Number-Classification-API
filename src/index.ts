import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper functions
const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPerfect = (num: number): boolean => {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num && num !== 1;
};

const isArmstrong = (num: number): boolean => {
  const digits = num.toString().split(""),
    len = digits.length;
  return (
    digits.reduce((sum, digit) => sum + Math.pow(parseInt(digit), len), 0) === num
  );
};

const getDigitSum = (num: number): number => {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
};

const getNumberProperties = (num: number): string[] => {
  const properties: string[] = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");
  return properties;
};

// ✅ Default Route for "/"
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Number Classification API! Add this path to the url   /api/classify-number?number=4   to test.");
});

// API Route
app.get("/api/classify-number", async (req: Request, res: Response): Promise<void> => {
    const { number } = req.query;
  
    if (!number || isNaN(Number(number))) {
      res.status(400).json({ number, error: true });
      return;
    }
  
    const num = Number(number);
    try {
      const funFactRes = await axios.get(`http://numbersapi.com/${num}/math?json`);
      const funFact = funFactRes.data.text;
  
      res.json({
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties: getNumberProperties(num),
        digit_sum: getDigitSum(num),
        fun_fact: funFact,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch fun fact" });
    }
  });
  
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
