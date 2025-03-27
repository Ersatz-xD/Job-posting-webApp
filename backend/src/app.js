import connectDB from "./config/db.js";
import cors from "cors";
import express from "express";

const app = express();

//________________Middlewares
//cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(express.json())

export default app;