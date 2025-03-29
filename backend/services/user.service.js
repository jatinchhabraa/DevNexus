// contains third party interactions of server here

import userModel from "../models/user.model.js";

export const createUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("email and password are required");
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userModel.create({
    email,
    password: hashedPassword,
  });

  return user;
};

export const getAllUsers = async (userId) => {
  const users = await userModel.find({
    _id: { $ne: userId },
  });
  return users;
};
