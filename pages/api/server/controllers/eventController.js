const asyncHandler = require("express-async-handler");
const Event = require("../model/Event.js");
const db = require("../config/dbSQL.js");

const createEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.create(req.body);
  res.status(200).json({
    success: true,
    data: event,
  });
});

// const getAllEvents = asyncHandler(async (req, res, next) => {
//   const events = await Event.find();
//   res.status(200).json({
//     success: true,
//     data: events,
//   });
// });

const getAllEvents = asyncHandler(async (req, res, next) => {
  const q = "SELECT * FROM events";
  const [response] = await (await db).query(q);
  res.status(200).json({
    success: true,
    data: response,
  });
});

const getEventById = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id);
  res.status(200).json({
    success: true,
    data: event,
  });
});

module.exports = { createEvent, getAllEvents, getEventById };
