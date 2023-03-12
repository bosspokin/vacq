const Appointment = require("../models/Appointment");

// @desc Get all appointments
// @route /api/v1/appointments
// @access Public
exports.getAppointments = async (req, res, next) => {
  let query;

  // General users can only see their own appointments!
  if (req.user.role !== "admin") {
    query = Appointment.find({ user: req.user.id }).populate({
      path: "hospital",
      select: "name province tel",
    });
  } else {
    // Admin can see all appointments!
    query = Appointment.find().populate({
      path: "hospital",
      select: "name province tel",
    });
  }

  try {
    const appointments = await query;
    console.log(appointments);

    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Cannot find Appointment" });
  }
};

// @desc Get single appointment
// @route GET /api/v1/appointments/:id
// @access Public
exports.getAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate({
      path: "hospital",
      select: " name description tel",
    });

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: `No appointment with the id of ${req.paramas.id}`,
      });
    }

    res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (err) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Cannot find Appointment" });
  }
};
