import React, { useEffect } from "react";
import { useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("http://localhost:5000/api");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json.workouts);
      }
    };

    fetchWorkout();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => {
            return <WorkoutDetails key={workout._id} workout={workout} />;
          })}
      </div>
    </div>
  );
};

export default Home;
