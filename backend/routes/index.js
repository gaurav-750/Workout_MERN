const express = require("express");
const Workout = require("../models/workout");

const workoutController = require("../controllers/workoutController");

const router = express.Router();

//Get all workouts:
router.get("/", (req, res) => {
  res.json({
    message: "Get all workouts!",
  });
});

//get a single workout:
router.get("/:id", (req, res) => {
  res.json({
    message: "Get a single workout!",
  });
});

//post a new workout
router.post("/", workoutController.createWorkout);

//delete a workout:
router.delete("/:id", (req, res) => {
  res.json({
    message: "Get all workouts!",
  });
});

//update a workout:
router.patch("/:id", (req, res) => {
  res.json({
    message: "Get all workouts!",
  });
});

module.exports = router;
