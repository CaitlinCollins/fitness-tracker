const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');

const app = express();

// setting up PORT
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

// Express Body Parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup Public Folder
app.use(express.static("public"));

// Require Routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Connect to Mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", { useNewUrlParser: true });

// Listener
app.listen(PORT, () => {
    console.log("App running on port 3000!");
});