const Record = require("../database/Record");

const getrecordForWorkout = (workoutId) => {
  try {
    const record = Record.getrecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};

module.exports = { getrecordForWorkout };
