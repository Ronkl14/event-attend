const express = require("express");
const {
  createEvent,
  getAllEvents,
  getEventById,
} = require("../controllers/eventController.js");
const { createUser, getAllUsers } = require("../controllers/userController.js");

const router = express.Router();

router.route("/events").post(createEvent).get(getAllEvents);
router.route("/events/:id").get(getEventById);
router.route("/users").post(createUser).get(getAllUsers);

module.exports = router;
