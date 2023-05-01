const express = require("express");
const {
  createEvent,
  getAllEvents,
  getEventById,
} = require("../controllers/eventController.js");

const router = express.Router();

router.route("/events").post(createEvent).get(getAllEvents);
router.route("/events/:id").get(getEventById);

module.exports = router;
