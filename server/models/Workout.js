import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    workoutName: {
      type: String,
      required: true,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    caloriesBurned: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Compound index to ensure a workout with the same workoutName is unique per user and date
WorkoutSchema.index({ workoutName: 1, user: 1, date: 1 }, { unique: true });

export default mongoose.model("Workout", WorkoutSchema);
