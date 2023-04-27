const recordService = require("../services/recordService");
const getrecordForWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter  : 'workout can not be empty'" },
    });
  }
  try {
    const record = recordService.getrecordForWorkout(workoutId);
    res.send({ status: "Ok", data: record });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "Failed",
      data: {
        error: error?.message || error,
      },
    });
  }
};

module.exports = { getrecordForWorkout };
