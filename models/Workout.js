const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
         }
    ]
});

// WorkoutSchema.methods.totalDuration = function() {

// }

// WorkoutSchema.methods.totalWeight = function() {

// }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;