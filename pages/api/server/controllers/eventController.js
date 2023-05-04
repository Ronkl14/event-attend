const asyncHandler = require("express-async-handler");
const Event = require("../model/Event.js");
const db = require("../config/dbSQL.js");

const createEvent = asyncHandler(async (req, res, next) => {
  const name = req.body.name;
  const location = req.body.location;
  const date = req.body.date;
  const description = req.body.description;
  const sql =
    "INSERT INTO events (event_name, event_date, event_location, event_description) VALUES (?, ?, ?, ?)";
  const values = [name, date, location, description];
  const [response] = await (await db).query(sql, values);
  res.status(200).json({
    success: true,
    data: response,
  });
});

const getAllEvents = asyncHandler(async (req, res, next) => {
  const q = "SELECT * FROM events";
  const [response] = await (await db).query(q);
  res.status(200).json({
    success: true,
    data: response,
  });
});

const getEventById = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const q = `SELECT * FROM events WHERE idevents = ${id}`;
  const [response] = await (await db).query(q);
  res.status(200).json({
    success: true,
    data: response,
  });
});

module.exports = { createEvent, getAllEvents, getEventById };
