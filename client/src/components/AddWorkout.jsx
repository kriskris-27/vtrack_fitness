import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
transition: 300ms ease-in-out;

  background: linear-gradient(43deg, 
              rgba(65, 88, 208, 0.5) 0%, 
              rgba(200, 80, 192, 0.5) 46%, 
              rgba(255, 204, 112, 0.5) 100%);
    &:hover {
    transform: rotateX(5deg) rotateY(5deg);
    filter: brightness(1.1);
  }
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.white};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.bg}; 
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

const AddWorkout = ({ setWorkout, addNewWorkout, buttonLoading }) => {
  const [category, setCategory] = useState("");
  const [workoutName, setWorkoutName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [duration, setDuration] = useState("");

  const handleAddWorkout = () => {
    // Check if all inputs are filled and in the correct format
    if (!category || !workoutName || !sets || !reps || !weight || !duration) {
      alert("Please fill in all fields in the correct format.");
      return;
    }

    // Format the workout string correctly
    const formattedWorkout = `#${category}\n-${workoutName}\n-${sets} setsX${reps} reps\n-${weight} kg\n-${duration} min`;

    // Validate that the data is in the correct format
    const validWorkout = validateWorkoutFormat(formattedWorkout);

    if (validWorkout) {
      setWorkout(formattedWorkout);
      addNewWorkout();

      // Clear the inputs after the workout is added
      setCategory("");
      setWorkoutName("");
      setSets("");
      setReps("");
      setWeight("");
      setDuration("");
    } else {
      alert("The workout data is not in the correct format. Please follow the correct format.");
    }
  };

  const validateWorkoutFormat = (data) => {
    // Regex pattern to validate that the input follows the format:
    // #Category (supports spaces)
    // -Workout Name (supports spaces)
    // -SetsXReps reps
    // -Weight kg
    // -Duration min
    const workoutPattern = /^#([A-Za-z0-9\s]+)\n-([A-Za-z0-9\s]+)\n-(\d+)\s*setsX(\d+)\s*reps\n-(\d+)\s*kg\n-(\d+)\s*min$/;

    return workoutPattern.test(data);
  };

  return (
    <Card>
      <Title>Add New Workout</Title>
      <FormWrapper>
        <TextInput
          label="Category"
          placeholder="Enter workout category"
          value={category}
          handelChange={(e) => setCategory(e.target.value)}
        />
        <TextInput
          label="Workout Name"
          placeholder="Enter workout name"
          value={workoutName}
          handelChange={(e) => setWorkoutName(e.target.value)}
        />
        <TextInput
          label="Sets"
          placeholder="Enter number of sets"
          value={sets}
          handelChange={(e) => setSets(e.target.value)}
        />
        <TextInput
          label="Reps"
          placeholder="Enter number of reps"
          value={reps}
          handelChange={(e) => setReps(e.target.value)}
        />
        <TextInput
          label="Weight"
          placeholder="Enter weight"
          value={weight}
          handelChange={(e) => setWeight(e.target.value)}
        />
        <TextInput
          label="Duration"
          placeholder="Enter duration in minutes"
          value={duration}
          handelChange={(e) => setDuration(e.target.value)}
        />
      </FormWrapper>
      <Button
        text="Add Workout"
        small
        onClick={handleAddWorkout}
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
      />
    </Card>
  );
};

export default AddWorkout;
