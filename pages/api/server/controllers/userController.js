const asyncHandler = require("express-async-handler");
const User = require("../model/User.js");
const qs = require("qs");
const axios = require("axios");
const db = require("../config/dbSQL.js");

const createUser = asyncHandler(async (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const event = req.body.event;
  const sql =
    "INSERT INTO attendees (attendee_name, attendee_phone, event_id) VALUES (?, ?, ?)";
  const values = [name, phone, event];
  const [response] = await (await db).query(sql, values);
  res.status(200).json({
    success: true,
    data: response,
  });
});

// const getAllUsers = asyncHandler(async (req, res, next) => {
//   const users = await User.find();
//   res.status(200).json({
//     success: true,
//     data: users,
//   });
// });

const getAllUsers = asyncHandler(async (req, res, next) => {
  const event = req.params.id;
  const q = `SELECT * FROM attendees WHERE event_id = ${event}`;
  const [response] = await (await db).query(q);
  res.status(200).json({
    success: true,
    data: response,
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
