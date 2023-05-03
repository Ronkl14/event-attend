const asyncHandler = require("express-async-handler");
const User = require("../model/User.js");
const qs = require("qs");
const axios = require("axios");

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

const sendSMS = asyncHandler(async (req, res, next) => {
  const name = req.body.name;
  console.log(name);
  const phone = req.body.phone;
  let data = qs.stringify({
    post: "2",
    token: process.env.SMS_KEY,
    msg: `hola ${name}`,
    list: phone,
    from: "gilad",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://www.micropay.co.il/ExtApi/ScheduleSms.php",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.json({ success: true, message: "SMS sent successfully!" });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = { createUser, getAllUsers, sendSMS };
