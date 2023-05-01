const asyncHandler = require("express-async-handler");
const Event = require("../model/Event.js");

const createEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.create(req.body);
  res.status(200).json({
    success: true,
    data: event,
  });
});

const getAllEvents = asyncHandler(async (req, res, next) => {
  const events = await Event.find();
  res.status(200).json({
    success: true,
    data: events,
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
