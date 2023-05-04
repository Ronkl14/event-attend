const express = require("express");
const {
  createEvent,
  getAllEvents,
  getEventById,
} = require("../controllers/eventController.js");
const {
  createUser,
  getAllUsers,
  sendSMS,
} = require("../controllers/userController.js");

const router = express.Router();

router.route("/events").post(createEvent).get(getAllEvents);
router.route("/events/:id").get(getEventById);
router.route("/events/:id/users").get(getAllUsers);
router.route("/users").post(createUser);
router.route("/users/msg").post(sendSMS);

module.exports = router;
