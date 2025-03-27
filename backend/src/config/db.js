import mongoose from "mongoose"
import User from "../models/user.model.js";

const connectDB = async () => {
    try {
      await  mongoose.connect(process.env.MONGO_URI);
      console.log("Database conneted successfully!");
    
      
    } catch (error) {
        console.log(`Error accored: ${error}`);
        
    }
}
 

export default connectDB;