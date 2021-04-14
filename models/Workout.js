const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };
const WorkoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now,
	},
	exercises: [
		{
			type: {
				type: String,
			},
			name: {
				type: String,
			},
			weight: {
				type: Number,
			},
			reps: {
				type: Number,
			},
			sets: {
				type: Number,
			},
			duration: {
				type: Number,
			},
			distance: {
				type: Number,
			},
		},
	],
}, opts);

WorkoutSchema.virtual("totalDuration").get(function () {
	let totalDuration = 0;
	this.exercises.forEach((exercise) => {
		totalDuration += exercise.duration;
	});

	return totalDuration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
