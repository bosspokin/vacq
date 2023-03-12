const express = require("express");

const {
  getAppointments,
  getAppointment,
} = require("../controllers/appointments");
const { protect } = require("../middleware/auth");

const router = express.Router({ mergeParams: true });

router.route("/").get(protect, getAppointments);
router.route("/:id").get(protect, getAppointment);

module.exports = router;
