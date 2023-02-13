const express = require("express");
const {
  getHospitals,
  createHospital,
  getHospital,
  updateHospital,
  deleteHospital,
} = require("../controllers/hospital");
const { protect, authorize } = require("../middleware/auth");
const router = express.Router();

router
  .route("/")
  .get(getHospitals)
  .post(protect, authorize("admin"), createHospital);
router
  .route("/:id")
  .get(getHospital)
  .put(protect, authorize("admin"), updateHospital)
  .delete(protect, authorize("admin"), deleteHospital);

module.exports = router;
