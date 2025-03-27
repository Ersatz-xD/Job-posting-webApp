import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken"

const verifyJWT = asyncHandler (async (req, res, next) => {
    try {
        const token = req.cookies?.accesToken || req.header("Authorization")?.replace("Bearer ", "");

        if(!token){
            throw new ApiError(400,"Token unavailable");
        }

      const decryptedToken =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET )

      const user = await User.findById(decryptedToken?._id).select("-password -refreshToken");
    
      if (!user){
        throw new ApiError(400, "Incorrect token")
      }

      req.user = user;
      next();
    
    } catch (error) {
        throw new ApiError(400, error?.message || "Incorrect token!");
    }
})