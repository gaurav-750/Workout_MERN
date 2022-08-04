const express = require("express");
const mongoose = require("mongoose");
const Workout = require("../models/workout");

//get all workouts:
module.exports.getAllWorkouts = async (req, res) => {
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
module.exports.getWorkout = async (req, res) => {
  //get the id through by params;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "No such Workout id!",
    });
  }

  //getting the workout:
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
module.exports.deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "No such Workout id!",
    });
  }

  //deleting a workout
  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    res.status(404).json({
      error: "No such workout!",
    });
  }

  return res.status(200).json({
    message: "Workout deleted succesfully!",
    workout: workout,
  });
};

//update a workout:
module.exports.updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "No such Workout id!",
    });
  }

  //updating a workout
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!workout) {
    res.status(404).json({
      error: "No such workout!",
    });
  }

  return res.status(200).json({
    message: "Workout updated succesfully!",
    workout: workout,
  });
};
