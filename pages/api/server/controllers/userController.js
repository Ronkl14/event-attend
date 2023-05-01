const asyncHandler = require("express-async-handler");
const User = require("../model/User.js");

const createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(200).json({
    success: true,
    data: user,
  });
});

const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    data: users,
  });
});

module.exports = { createUser, getAllUsers };
