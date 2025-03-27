import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

//signup
const signupUser = asyncHandler(async (req, res, next) => {
    //users data
    const { username, email, password } = req.body;

    // verify user data, username and email
    if (
        [username, email, password].some((i) => i?.trim() === "")
    ) {
        throw new ApiError(400, "some fields are empty");
    }

    const existingUser = await User.findOne({
        $or: [{username}, {email}]
    })

    if(existingUser){
        throw new ApiError(400, "User already exists");
    }
    //create user in database
    const newUser = await User.create({
        username, email, password
    });

    
    //add user in req
    const user = await User.findById(newUser._id).select("-password -refreshToken");

    if(!user){
        throw new ApiError(500, "User can't be created")
    }
})
//login

//logout

//account deletion

//forget password

//update change

