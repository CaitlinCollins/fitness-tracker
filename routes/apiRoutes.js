const router = require('express').Router();
const Workout = require('../models/Workout');


// get all workouts
router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(data => {
        console.log(data)
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

// Add exercise to recent workout

// Add exercise to new workout


// Get Stats


// Post to Stats



module.exports = router;