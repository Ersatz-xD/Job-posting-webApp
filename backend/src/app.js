import connectDB from "./config/db";
import express from "express";

const app = express();

//________________Middlewares
//cors
app.use(cor());
app.use(express.json())

export default app;