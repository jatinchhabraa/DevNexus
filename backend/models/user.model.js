import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: [6, "Email must be 6 characters long"],
    maxLength: [50, "Email must not be longer than 50 cahracters"],
  },

  password: {
    type: String,
    select: false,
  },
});

userSchema.statics.hashPassword = async function (password) {
  return await bcryptjs.hash(password, 10);
};

userSchema.methods.isValidPassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

userSchema.methods.generateJWT = function () {
  return jwt.sign({ email: this.email }, process.env.JWT_SECRET);
};

const User = mongoose.model("user", userSchema);

export default User;
