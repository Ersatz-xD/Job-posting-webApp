import app from "./app.js";
import dotenv from "dotenv"
import connectDB from "./config/db.js";

dotenv.config();

connectDB().then( ()=> {
    app.listen(process.env.PORT, ()=> {
        console.log(`Server is running on port: ${process.env.PORT}`);

        
    });
})