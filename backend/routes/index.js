const express = require("express");
const Workout = require("../models/workout");

const workoutController = require("../controllers/workoutController");

const router = express.Router();

//Get all workouts:
router.get("/", workoutController.getAllWorkouts);

//get a single workout:
router.get("/:id", workoutController.getWorkout);

//post a new workout
router.post("/", workoutController.createWorkout);

//delete a workout:
router.delete("/:id", workoutController.deleteWorkout);

//update a workout:
router.patch("/:id", workoutController.updateWorkout);

module.exports = router;
