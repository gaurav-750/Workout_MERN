const express = require("express");
const Workout = require("../models/workout");

//get all workouts:
module.exports.getAllWorkout = async (req, res) => {
  const workouts = await Workout.find().sort({ createdAt: -1 });

  if (!workouts) {
    res.status(404).json({
      message: "No workouts yet!",
    });
  }

  res.status(200).json({
    workouts: workouts,
  });
};

//get a single workout:
module.exports.getAllWorkout = async (req, res) => {
  //get the id through by params;
  const id = req.params.id;
  const workout = await Workout.findById({ _id: id });

  if (!workout) {
    res.status(404).json({
      error: "No such workout!",
    });
  }

  res.status(200).json({
    workout: workout,
  });
};

//create a new workout:
module.exports.createWorkout = async (req, res) => {
  //creating a new workout:
  try {
    console.log(req.body);
    const workout = await Workout.create(req.body);

    res.status(200).json({
      message: "New Workout Added!",
      workout: workout,
    });
  } catch (error) {
    res.status(200).json({
      error: error.message,
    });
  }
};

//delete a workout:

//update a workout: