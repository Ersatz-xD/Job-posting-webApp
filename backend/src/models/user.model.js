import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
      username: {
        type: String,
        lowercase: true,
        required: [true, "This field is required."],
        index: true,
        unique: true,
      },
      email: {
        type: String,
        required: [true, "This field is required."],
        unique: true,
      },
      address: {
        type: String,
      },
      dob: {
        type: String,
      },
      password: {
        type: String,
        required: [true, "This field is required."],
      },
      phoneNo: {
        type: String,
      },
      profilePic: {
        type: String,
      },
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      refresh: {
        type: String,
      },
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt
  );
  
  // Hash password before saving user
  userSchema.pre("save", async function (next) {
    if (!this.isModified("password")){
        return next(); // Avoid re-hashing if password is unchanged
    };

    this.password = await bcrypt.hash(this.password, 10);
    next();
  });

    //generate access token
  userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        name: this.name,
        _id: this._id,
        email: this.email,
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    } )
  };

  //generate refresh token
  userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        name: this.name,
        _id: this._id,
        email: this.email,
    }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    } )
  };
  
  const User = mongoose.model("User", userSchema);
  
  export default User;
