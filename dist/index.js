"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Helper functions
const isPrime = (num) => {
    if (num < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
};
const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i)
                sum += num / i;
        }
    }
    return sum === num && num !== 1;
};
const isArmstrong = (num) => {
    const digits = num.toString().split(""), len = digits.length;
    return (digits.reduce((sum, digit) => sum + Math.pow(parseInt(digit), len), 0) === num);
};
const getDigitSum = (num) => {
    return num
        .toString()
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit), 0);
};
const getNumberProperties = (num) => {
    const properties = [];
    if (isArmstrong(num))
        properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");
    return properties;
};
// API Route
app.get("/api/classify-number", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { number } = req.query;
    if (!number || isNaN(Number(number))) {
        res.status(400).json({ number, error: true });
        return;
    }
    const num = Number(number);
    try {
        const funFactRes = yield axios_1.default.get(`http://numbersapi.com/${num}/math?json`);
        const funFact = funFactRes.data.text;
        res.json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties: getNumberProperties(num),
            digit_sum: getDigitSum(num),
            fun_fact: funFact,
        });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch fun fact" });
    }
}));
// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
