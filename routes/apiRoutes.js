const router = require('express').Router();
const Workout = require('../models/Workout');


// get all workouts
router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .sort({_id: -1}).limit(1)
    .then(data => {
        console.log(data)
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//get workouts in range
router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
    .sort({_id: -1}).limit(7)
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


// Add exercise to new workout
router.post('/api/workouts', ({body}, res) => {
    Workout.create(body)
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


// Add exercise to recent workout
router.put('/api/workouts/:id', ({body, params}, res) => {
    Workout.updateOne({ _id : params.id }, {$push: { exercises: body }})
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});




module.exports = router;